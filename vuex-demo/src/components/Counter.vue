<template>
	<div>
		<button class="btn btn-primary" @click="increment(100)">increment(100)</button>
		<button class="btn btn-primary" @click="decrement(100)">decrement(100)</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
 	
	export default {
//		methods: {
//			increment() {
//				// 普通方法
//				this.$store.commit('increment');
//			},
//			decrement() {
//				this.$store.commit('decrement');
//			}
//		}
		methods: {
			...mapActions([
				'increment',
				'decrement'
			])
		}
	}
</script>

<style>
</style>
