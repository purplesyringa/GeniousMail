<template>
	<div class="discussion-view">
		<h2>{{subject}}</h2>
	</div>
</template>

<style lang="sass" scoped>
	.discussion-view
		height: 100%
		overflow-y: scroll

		h2
			font-size: 24px
</style>

<script type="text/javascript">
	export default {
		name: "DiscussionView",
		props: ["subject", "from", "fromNick", "id"]
	};
</script>