<template>
	<div class="component">
		<h3>You may view the User Details here.</h3>
		<p>Many Details</p>
		<p>User Name: {{ switchName() }}</p>
		<p>User Age: {{ userAge }}</p>
		<p>User Phone: {{ userPhone }}</p>
		<button @click="resetName">Reset Name(Child to Parent)</button>
		<button @click="resetFn()">Reset Name(Parent to Child)</button>
	</div>
</template>

<script>
	import { eventBus } from '../main.js';
	
	export default {
//		props: ['myName'],
		props: {
			myName: {
				type: String,
//				required: true,
				default: 'myName'
			},
			resetFn: Function,
			userAge: Number,
			userPhone: Number
		},
		methods: {
			switchName() {
				return this.myName.split('').reverse().join('');
			},
			resetName() {
				this.myName = 'Child';
				this.$emit('nameWasReset', this.myName);
			}
		},
		created() {
			eventBus.$on('phoneWasEdited', (phone) => {
				this.userPhone = phone;
			});
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcyan;
	}
</style>