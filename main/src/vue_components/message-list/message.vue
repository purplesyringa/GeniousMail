<template>
	<div class="message">
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
		transition: 0.5s all
		cursor: pointer

		&:hover
			background-color: #F0F0F0
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
</style>

<script type="text/javascript">
	export default {
		name: "Message",
		props: ["subject", "from", "fromNick", "id"]
	};
</script>