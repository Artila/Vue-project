<template>
	<div>
		<button 
			class="btn btn-primary" 
			@click="asyncIncrement({ by: 100, duration: 1000})">
			increment(100, 1s)
		</button>
		<button 
			class="btn btn-primary" 
			@click="asyncDecrement({ by: 100, duration: 1000})">
			decrement(100, 1s)
		</button>
	</div>
</template>

<script>
//	import { mapMutations } from 'vuex';
//	
//	export default {
//		methods: {
//			...mapMutations([
//				'increment',
//				'decrement'
//			])
//		}
//	}

	import { mapActions } from 'vuex';
	
	export default {
		methods: {
			...mapActions([
				'asyncIncrement',
				'asyncDecrement'
			])
		}
	}
</script>

<style>
</style>
