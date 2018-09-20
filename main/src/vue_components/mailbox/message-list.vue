<template>
	<div class="message-list">
		<slot />
	</div>
</template>

<style lang="sass" scoped>
	.message-list
		width: 396px
		height: 100%
		overflow-y: scroll
		border-right: 1px solid #EEE
</style>

<script type="text/javascript">
	export default {
		name: "MessageList"
	};
</script>