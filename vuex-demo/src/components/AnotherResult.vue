<template>
	<div>
		<p>DoubleCounter is {{ doubleCounter }}</p>
		<p>Number of clicks: {{ clickCounter }}</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	
	export default {
		computed: {		
//			counter() {
//				// 1. 获取state
//				// return this.$store.state.counter * 2;
//				// 2. 获取getter
//				return this.$store.getters.doubleCounter;
//			},
//			clicks() {
//				return this.$store.getters.clickCounter;
//			}
			...mapGetters([
				'doubleCounter',
				'clickCounter'
			])
		}
	}
</script>

<style>
</style>