import "./sass/main.sass";

import Vue from "vue/dist/vue.min.js";

import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

// Components

import Icon from "vue-awesome/components/Icon.vue";
Vue.component("icon", Icon);

import DiscussionList from "@/vue_components/mailbox/discussion-list.vue";
Vue.component("DiscussionList", DiscussionList);

import Discussion from "@/vue_components/mailbox/discussion.vue";
Vue.component("Discussion", Discussion);

import DiscussionView from "@/vue_components/mailbox/discussion-view.vue";
Vue.component("DiscussionView", DiscussionView);

import Mailbox from "@/vue_components/mailbox/mailbox.vue";
Vue.component("Mailbox", Mailbox);

import Sidebar from "@/vue_components/controls/sidebar.vue";
Vue.component("Sidebar", Sidebar);

import Header from "@/vue_components/controls/header.vue";
Vue.component("Header", Header);

import Clearfix from "@/vue_components/clearfix/clearfix.vue";
Vue.component("Clearfix", Clearfix);

Vue.prototype.$eventBus = new Vue();

import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		siteInfo: {
			settings: {
				own: false
			}
		},
		currentParams: null,
		currentRoute: null,
		currentHash: null,
		tab: ""
	},
	mutations: {
		setSiteInfo(state, siteInfo) {
			state.siteInfo = siteInfo;
		},
		route(state, router) {
			state.currentParams = router.currentParams;
			state.currentRoute = router.currentRoute;
			state.currentHash = router.currentHash;
		},
		openTab(state, tab) {
			state.tab = tab;
		}
	}
});

import root from "./vue_components/root.vue";
var app = new Vue({
	el: "#app",
	render: h => h(root),
	data: {
		currentView: null
	},
	store
});

import {route} from "./route.js";
import {zeroPage} from "./zero";

Vue.prototype.$zeroPage = zeroPage;

(async function() {
	const siteInfo = await zeroPage.getSiteInfo();
	store.commit("setSiteInfo", siteInfo);
	route(app);
	app.$eventBus.$emit("setSiteInfo", siteInfo);
})();
zeroPage.on("setSiteInfo", msg => {
	store.commit("setSiteInfo", msg.params);
	app.$eventBus.$emit("setSiteInfo", msg.params);
});