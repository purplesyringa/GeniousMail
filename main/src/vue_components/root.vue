<template>
	<div class="current-view">
		<Sidebar />
		<div class="content">
			<component :is="$parent.currentView" ref="currentView"></component>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.current-view
		height: 100%

	.content
		height: 100%
		float: left
</style>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>