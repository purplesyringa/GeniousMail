<template>
	<div :class="['item', {current, disabled}]" @click="open">
		<icon class="item-icon" :name="icon" />
		{{name}}
	</div>
</template>

<style lang="sass" scoped>
	.item
		display: block
		height: 40px
		padding: 10px 16px
		margin: 8px 16px

		background-color: rgba(255, 255, 255, 0.1)
		border: rgba(255, 255, 255, 0.3) solid 1px
		border-radius: 8px
		color: #FFF
		transition: all 0.2s
		cursor: pointer

		&:hover
			background-color: rgba(255, 255, 255, 0.3)
			transition: none

		&.disabled
			background-color: rgba(0, 0, 0, 0.1)

		&.current
			background-color: rgba(255, 255, 0, 0.5)

		.item-icon
			width: 24px
			margin-right: 8px
</style>

<script type="text/javascript">
	export default {
		name: "SidebarTab",
		props: ["icon", "name", "disabled"],
		data() {
			return {
				icon: "",
				name: "",
				disabled: false
			};
		},

		methods: {
			open() {
				if(!this.disabled) {
					this.$router.navigate(this.name.toLowerCase());
				}
			}
		},

		computed: {
			current() {
				return this.$store.state.tab === this.name;
			}
		}
	};
</script>