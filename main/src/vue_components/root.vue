<template>
	<div class="current-view">
		<Header />
		<div class="below">
			<Sidebar />
			<div class="content">
				<div class="content-child">
					<component :is="$parent.currentView" ref="currentView"></component>
				</div>
			</div>
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
			height: 100%

			.content
				display: flex
				flex: 1 0 0
				flex-direction: column
				height: 100%

				.content-child
					flex: auto
					height: 0
					min-height: 0
					overflow: hidden
</style>

<script language="text/javascript">
	export default {
		props: [],
		name: "root"
	};
</script>