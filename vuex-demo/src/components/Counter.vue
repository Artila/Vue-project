<template>
	<div>
		<button class="btn btn-primary" @click="increment">increment</button>
		<button class="btn btn-primary" @click="decrement">decrement</button>
	</div>
</template>

<script>
	export default {
		methods: {
			increment() {
				this.$emit('updated', 1);
			},
			decrement() {
				this.$emit('updated', -1);
			}
		}
	}
</script>

<style>
</style>
