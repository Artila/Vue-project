<template>
	<div class="component">
		<h3>You may edit the User here.</h3>
		<p>Edit me!</p>
		<p>User Age: {{ userAge }}</p>
		<p>User Phone: {{ userPhone }}</p>
		<button @click="editAge">Edit Age(Child to Parent, Parent to Child)</button>
		<button @click="editPhone">Edit Phone(Child to Child)</button>
	</div>	
</template>

<script>
	import { eventBus } from '../main.js';
	
	export default {
		props: ['userAge', 'userPhone'],
		methods: {
			editAge() {
				this.userAge = 23;
				this.$emit('ageWasEdited', this.userAge);
			},
			editPhone() {
				this.userPhone = 999;
				// 第一种 event bus 的用法：
				// eventBus.$emit('phoneWasEdited', this.userPhone);
				// 第二种 event bus 的用法：
				eventBus.changePhone(this.userPhone);
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: lightgoldenrodyellow;
	}
</style>