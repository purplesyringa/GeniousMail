<template>
	<div class="message-view">
		<h2>{{subject}}</h2>
	</div>
</template>

<style lang="sass" scoped>
	.message-view
		height: 100%
		overflow-y: scroll

		h2
			font-size: 24px
</style>

<script type="text/javascript">
	export default {
		name: "MessageView",
		props: ["subject", "from", "fromNick", "id"]
	};
</script>