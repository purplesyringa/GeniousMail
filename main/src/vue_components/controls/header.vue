<template>
	<div class="header">
		<div class="logo">GeniousMail</div>

		<input type="text" :placeholder="placeholder" class="search">
	</div>
</template>

<style lang="sass" scoped>
	.header
		width: 100%
		background-color: #224

	.logo
		float: left
		width: 182px
		padding: 20px 0
		height: 80px
		font-family: TextMeOne
		font-size: 32px
		text-align: center

		background-color: #D20
		color: #FFF

	.search
		display: block
		float: left
		width: 480px
		max-width: calc(100% - 230px - 32px - 32px)
		height: 48px
		padding: 8px 16px
		margin: 16px 24px

		background-color: transparent
		border: rgba(255, 255, 255, 0.3) solid 1px
		border-radius: 8px
		color: #FFF
</style>

<script type="text/javascript">
	export default {
		name: "Header",

		computed: {
			placeholder() {
				const tab = this.$store.state.tab;
				return `Search in ${tab}`;
			}
		}
	};
</script>