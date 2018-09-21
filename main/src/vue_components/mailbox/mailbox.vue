<template>
	<div class="mailbox">
		<MessageList>
			<Message
				v-for="message in messages"
				:key="message.id"

				:subject="message.subject"
				:from="message.from"
				:fromNick="message.fromNick"
				:id="message.id"

				:current="message.id === current"
			/>
		</MessageList>

		<div class="message-view" v-if="current">
			<MessageView v-bind="currentMessage" />
		</div>
		<div class="message-view" v-else>
			<div class="no-message">
				No message selected.
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.mailbox
		display: flex
		flex-orientation: row
		width: 100%
		height: 100%

		.message-view
			flex: 1

			.no-message
				display: flex
				height: 100%
				justify-content: center
				align-items: center

				font-family: Monaco, Courier New, monospace
				color: #888
</style>

<script type="text/javascript">
	export default {
		name: "Mailbox",
		props: ["messages", "current"],
		data() {
			return {
				messages: [],
				current: null
			};
		},

		computed: {
			currentMessage() {
				return this.messages.find(message => message.id === this.current);
			}
		}
	};
</script>