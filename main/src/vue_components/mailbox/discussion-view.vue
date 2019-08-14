<template>
	<div class="discussion-view">
		<h2>{{subject}}</h2>

		<MessageView v-for="message in messages" v-bind="message" :key="message.id" />
	</div>
</template>

<style lang="sass" scoped>
	.discussion-view
		height: 100%
		overflow-y: scroll
		padding: 16px 24px
		background-color: #F8E8E8

		h2
			font-size: 24px
			margin: 0
</style>

<script type="text/javascript">
	export default {
		name: "DiscussionView",
		props: ["id", "messages", "subject", "participants"]
	};
</script>