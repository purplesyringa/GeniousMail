<template>
	<div class="mailbox">
		<DiscussionList>
			<Discussion
				v-for="discussion in discussions"
				:key="discussion.id"

				:subject="discussion.subject"
				:participants="discussion.participants"
				:id="discussion.id"

				:current="discussion.id === current"
			/>
		</DiscussionList>

		<div class="discussion-view" v-if="current">
			<DiscussionView v-bind="currentDiscussion" />
		</div>
		<div class="discussion-view" v-else>
			<div class="no-discussion">
				No message selected.
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.mailbox
		display: flex
		flex-direction: row
		flex: 1 1 0

		.discussion-view
			flex: 1

			.no-discussion
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
				discussions: [],
				current: null
			};
		},

		mounted() {
			this.updateDiscussions(this.messages);
		},

		watch: {
			messages(messages) {
				this.updateDiscussions(messages);
			}
		},

		methods: {
			updateDiscussions() {
				// Notice: we don't use computed property for
				// discussions; instead we watch messages and change
				// discussions inside.
				// This allows us to load some cache before and be
				// sure some Vue change won't affect the result.
				this.discussions = [];

				// Sort discussions by their root
				const discussionsByRoot = {};
				const messageById = {};
				const participantsByRoot = {};
				for(const message of this.messages) {
					// Add message to discussion
					if(!discussionsByRoot[message.discussion]) {
						discussionsByRoot[message.discussion] = [];
					}
					discussionsByRoot[message.discussion].push(message);

					// Save message
					messageById[message.id] = message;

					// Add participant
					if(!participantsByRoot[message.discussion]) {
						participantsByRoot[message.discussion] = [];
					}
					let participantList = participantsByRoot[message.discussion];
					if(
						!participantList.some(p => p.authAddress === message.authAddress)
					) {
						participantList.push({
							nick: message.nick,
							certUserId: message.certUserId,
							authAddress: message.authAddress
						});
					}
				}

				// Now to array
				for(const rootId of Object.keys(discussionsByRoot)) {
					this.discussions.push({
						id: rootId,
						messages: discussionsByRoot[rootId].sort((a, b) => a.timestamp - b.timestamp),
						subject: messageById[rootId].subject,
						participants: participantsByRoot[rootId]
					});
				}
			}
		},

		computed: {
			currentDiscussion() {
				return this.discussions.find(discussion => discussion.id === this.current);
			}
		}
	};
</script>