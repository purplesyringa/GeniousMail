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
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "0",
						discussion: "0",
						authAddress: "1A"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "1",
						discussion: "0",
						authAddress: "1B"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "2",
						discussion: "2",
						authAddress: "1C"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "3",
						discussion: "3",
						authAddress: "1D"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "4",
						discussion: "0",
						authAddress: "1E"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "5",
						discussion: "3",
						authAddress: "1F"
					}
				]
			};
		},
		mounted() {
			this.$store.commit("openTab", "Inbox");
		},

		computed: {
			current() {
				const id = this.$router.currentParams.discussion;
				if(id === undefined) {
					return null;
				} else {
					return id;
				}
			}
		}
	};
</script>