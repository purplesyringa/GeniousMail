<template>
	<div class="sidebar">
		<div class="new-mail" @click="newMail">
			New mail
		</div>

		<SidebarTab icon="inbox" name="Inbox" />
		<SidebarTab icon="star" name="Marked" :disabled="true" />
		<SidebarTab icon="file" name="Drafts" :disabled="true" />
		<SidebarTab icon="plane" name="Sent" :disabled="true" />
		<SidebarTab icon="envelope" name="All" :disabled="true" />
		<SidebarTab icon="trash" name="Trash" :disabled="true" />
	</div>
</template>

<style lang="sass" scoped>
	.sidebar
		flex: 0 0 182px
		background-color: #D20

		.new-mail
			display: block
			height: 40px
			padding: 10px 16px
			margin: 8px 16px 24px

			border: rgba(255, 255, 255, 0.3) solid 1px
			border-radius: 8px
			color: #FFF
			transition: all 0.2s
			cursor: pointer
			text-align: center
</style>

<script type="text/javascript">
	import "vue-awesome/icons/inbox";
	import "vue-awesome/icons/star";
	import "vue-awesome/icons/file";
	import "vue-awesome/icons/plane";
	import "vue-awesome/icons/envelope";
	import "vue-awesome/icons/trash";

	import SidebarTab from "./sidebar-tab.vue";

	export default {
		name: "Sidebar",

		methods: {
			newMail() {
				this.$router.navigate("new-mail");
			}
		},

		components: {
			SidebarTab
		}
	};
</script>