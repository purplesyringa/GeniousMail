<template>
	<Mailbox :messages="messages" :current="current" />
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
						id: "0"
					},
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: "1"
					},
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: "2"
					},
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: "3"
					},
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: "4"
					},
					{
						subject: "Hello world",
						from: "gitcenter@zeroid.bit",
						fromNick: "Git Center",
						id: "5"
					}
				]
			};
		},
		mounted() {
			this.$store.commit("openTab", "Inbox");
		},

		computed: {
			current() {
				const id = this.$router.currentParams.message;
				if(id === undefined) {
					return null;
				} else {
					return id;
				}
			}
		}
	};
</script>