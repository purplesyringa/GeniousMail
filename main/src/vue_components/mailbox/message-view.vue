<template>
	<div class="message">
		<h3>
			<span class="username">{{nick}} </span>
			<span class="mail">&lt;{{certUserId}}&gt; </span>
			<span>wrote at </span>
			<span class="date">{{formattedDate}}</span>
		</h3>

		{{text}}
	</div>
</template>

<style lang="sass" scoped>
	.message
		padding: 16px 24px
		margin-top: 24px
		background-color: #FFFFFF
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
		transition: all 0.2s

		&:hover
			margin-top: 28px
			margin-bottom: -4px
			box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2)

		h3
			margin: 0
			margin-bottom: 8px
			font-weight: normal
			font-size: 0

			> *
				font-size: 16px

			.username
				color: #F80
				font-weight: bold
			.mail, .date
				color: #AAA
</style>

<script type="text/javascript">
	export default {
		name: "MessageView",
		props: {
			certUserId: String,
			nick: String,
			id: String,
			authAddress: String,
			timestamp: Number,
			text: String
		},

		computed: {
			formattedDate() {
				return (new Date(this.timestamp)).toLocaleString();
			}
		}
	};
</script>