<template>
	<div :class="['message', {current}]" @click="open">
		<h2>{{subject}}</h2>
		<h3 class="from">
			From:
			<span class="username">{{fromNick}}</span>
			<span class="mail">&lt;{{from}}&gt;</span>
		</h3>
	</div>
</template>

<style lang="sass" scoped>
	.message
		padding: 24px 32px
		transition: 0.2s all
		cursor: pointer
		border-bottom: 1px solid #EEE

		&:hover
			background-color: #FCFCFC
			transition: none

		h2, h3
			margin: 0

		h3
			font-weight: normal

			&.from
				.username
					color: #F80
					font-weight: bold
				.mail
					color: #AAA

		&.current
			background-color: #F8E8E8
</style>

<script type="text/javascript">
	export default {
		name: "Message",
		props: {
			subject: String,
			from: String,
			fromNick: String,
			id: String,
			current: Boolean
		},

		methods: {
			open() {
				const tab = this.$store.state.tab;
				this.$router.navigate(`${tab.toLowerCase()}/message/${this.id}`);
			}
		}
	};
</script>