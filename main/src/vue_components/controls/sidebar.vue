<template>
	<div class="sidebar">
		<div class="item current">
			<icon class="item-icon" name="inbox" />
			Inbox
		</div>

		<div class="item disabled">
			<icon class="item-icon" name="star" />
			Marked
		</div>

		<div class="item disabled">
			<icon class="item-icon" name="file" />
			Drafts
		</div>

		<div class="item disabled">
			<icon class="item-icon" name="plane" />
			Sent
		</div>

		<div class="item">
			<icon class="item-icon" name="envelope" />
			All
		</div>

		<div class="item disabled">
			<icon class="item-icon" name="trash" />
			Trash
		</div>
	</div>
</template>

<style lang="sass" scoped>
	.sidebar
		width: 230px
		height: 100%
		float: left
		background-color: #D20

	.item
		display: block
		height: 40px
		padding: 10px 16px
		margin: 8px 32px

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
			width: 32px
			margin-right: 8px
</style>

<script type="text/javascript">
	import "vue-awesome/icons/inbox";
	import "vue-awesome/icons/star";
	import "vue-awesome/icons/file";
	import "vue-awesome/icons/plane";
	import "vue-awesome/icons/envelope";
	import "vue-awesome/icons/trash";

	export default {
		name: "Sidebar"
	};
</script>