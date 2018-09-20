import Inbox from "./mail/inbox.vue";

export default vue => [
	{
		path: "",
		controller: () => {
			vue.currentView = Inbox;
		}
	},
	{
		path: "inbox",
		controller: () => {
			vue.currentView = Inbox;
		}
	}
];