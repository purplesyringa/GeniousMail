<template>
	<div :class="['discussion', {current}]" @click="open">
		<h2>{{subject}}</h2>
		<h3 class="from">
			<template v-for="participant, i in participants">
				<span class="username">{{participant.nick}} </span>
				<span class="mail">&lt;{{participant.certUserId}}&gt;</span>
				<span class="sep" v-if="i + 1 < participants.length">, </span>
			</template>
		</h3>
	</div>
</template>

<style lang="sass" scoped>
	.discussion
		padding: 16px 24px
		transition: 0.2s all
		cursor: pointer
		border-bottom: 1px solid #EEE

		&:hover
			background-color: #F8F8F8
			transition: none

		h2, h3
			margin: 0

		h3
			font-weight: normal

			&.from
				font-size: 0
				> *
					font-size: 16px

				.username
					color: #F80
					font-weight: bold
				.mail
					color: #AAA
				.sep
					color: #AAA

		&.current
			background-color: #F8E8E8
</style>

<script type="text/javascript">
	export default {
		name: "Discussion",
		props: {
			subject: String,
			participants: Array,
			id: String,
			current: Boolean
		},

		methods: {
			open() {
				const tab = this.$store.state.tab;
				this.$router.navigate(`${tab.toLowerCase()}/discussion/${this.id}`);
			}
		}
	};
</script>