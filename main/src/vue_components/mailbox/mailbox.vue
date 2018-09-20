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
			/>
		</MessageList>
	</div>
</template>

<style lang="sass" scoped>
	.mailbox
		height: 100%
</style>

<script type="text/javascript">
	export default {
		name: "Mailbox",
		props: ["messages"],
		data() {
			return {
				messages: []
			};
		}
	};
</script>