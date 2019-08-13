<template>
	<div class="current-view">
		<Header />
		<div class="below">
			<Sidebar />
			<component :is="$parent.currentView" ref="currentView"></component>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.current-view
		display: flex
		flex-direction: column
		height: 100%

		.below
			display: flex
			flex-direction: row
			align-items: stretch
			flex: 1 1 0
			min-height: 0
</style>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>