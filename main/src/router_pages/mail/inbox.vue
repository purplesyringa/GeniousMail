<template>
	<Mailbox :messages="messages" />
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
		},
		mounted() {
			this.$store.commit("openTab", "Inbox");
		}
	};
</script>