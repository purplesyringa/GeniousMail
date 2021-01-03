import Inbox from "./mail/inbox.vue";
import NewMail from "./mail/new.vue";

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
	},
	{
		path: "inbox/discussion/:discussion",
		controller: () => {
			vue.currentView = Inbox;
		}
	},

	{
		path: "new-mail",
		controller: () => {
			vue.currentView = NewMail;
		}
	}
];