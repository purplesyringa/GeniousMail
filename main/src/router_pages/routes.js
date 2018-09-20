import Inbox from "./mail/inbox.vue";

export default vue => [
	{
		path: "",
		controller: () => {
			setTimeout(() => {
				vue.$router.navigate("inbox");
			}, 0);
		}
	},

	{
		path: "inbox",
		controller: () => {
			vue.currentView = Inbox;
		}
	}
];