<template>
	<div class="sidebar">
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

		components: {
			SidebarTab
		}
	};
</script>