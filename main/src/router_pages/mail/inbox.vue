<template>
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
</template>

<script type="text/javascript">
	export default {
		name: "inbox",
		data() {
			return {
				messages: [
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: 0
					}
				]
			};
		}
	};
</script>