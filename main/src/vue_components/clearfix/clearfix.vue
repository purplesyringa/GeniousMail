<template>
	<div :class="['clearfix', `clear-${clear}`]" />
</template>

<style lang="sass" scoped>
	.clear-both
		clear: both
	.clear-left
		clear: left
	.clear-right
		clear: right
</style>

<script type="text/javascript">
	export default {
		name: "Clearfix",
		props: {
			clear: {
				type: String,
				default: "both",
				validator(value) {
					return ["both", "left", "right"].includes(value);
				}
			}
		},
		data() {
			return {
				clear: ""
			};
		}
	};
</script>