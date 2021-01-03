<template>
	<Mailbox :messages="messages" :current="current" />
</template>

<script type="text/javascript">
	export default {
		name: "new",
		data() {
			return {
				messages: [
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "0",
						discussion: "0",
						authAddress: "1A",
						timestamp: Date.now(),
						text: "How do you do"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "1",
						discussion: "0",
						authAddress: "1B",
						timestamp: Date.now() - 1000,
						text: "Testing"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "2",
						discussion: "2",
						authAddress: "1C",
						timestamp: Date.now() - 60 * 1000,
						text: "Blablabla"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "3",
						discussion: "3",
						authAddress: "1D",
						timestamp: Date.now() - 120 * 1000,
						text: "z3r0n3t_1s_4w3s0m3"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "4",
						discussion: "0",
						authAddress: "1E",
						timestamp: Date.now() - 60 * 60 * 1000,
						text: "Hello, world!"
					},
					{
						subject: "Hello world",
						certUserId: "gitcenter@zeroid.bit",
						nick: "Git Center",
						id: "5",
						discussion: "3",
						authAddress: "1F",
						timestamp: Date.now() - 24 * 60 * 60 * 1000,
						text: "Hello from Google"
					}
				]
			};
		},
		mounted() {
			this.$store.commit("openTab", "");
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