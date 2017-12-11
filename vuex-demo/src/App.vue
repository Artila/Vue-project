<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Vuex</h1>
				<app-result></app-result>
				<app-another-result></app-another-result>
				<hr />
				<app-counter></app-counter>
				<app-another-counter></app-another-counter>
				<hr />
				<input type="text"  v-model="value">
				<p>{{ value }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Counter from './components/Counter.vue';
	import AnotherCounter from './components/AnotherCounter.vue';
	import Result from './components/Result.vue';
	import AnotherResult from './components/AnotherResult.vue';
	
	export default {
		// 第一种： 把vuex和v-model绑定的方法：:value="value" @input="updateValue"
//		computed: {
//			value() {
//				return this.$store.getters.value;
//			}
//		},
//		methods: {
//			updateValue(event) {
//				return this.$store.dispatch('updateValue', event.target.value);
//			}
//		},
		// 第二种
		computed: {
			value: {
				get() {
					return this.$store.getters.value;
				},
				set(value) {
					return this.$store.dispatch('updateValue', value);
				}
			}
		},
		components: {
			appCounter: Counter,
			appAnotherCounter: AnotherCounter,
			appResult: Result,
			appAnotherResult: AnotherResult
		}
	}
</script>

<style>
</style>