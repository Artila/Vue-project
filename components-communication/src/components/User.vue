<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<p>Name is {{ name }}</p>
		<p>Age is {{ age }}</p>
		<p>Phone is {{ phone }}</p>
		<button @click="changeName">Change my Name</button>		
		<hr />
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail 
					:myName="name" 
					@nameWasReset=" name = $event "
					:resetFn="resetName"
					:userAge="age"
					:userPhone="phone">
				</app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit 
					:userAge="age"
					@ageWasEdited=" age = $event "
					:userPhone="phone">
				</app-user-edit>
			</div>			
		</div>
	</div>
</template>

<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';
	
	export default {
		data: function() {
			return {
				name: 'Max',
				age: 20,
				phone: 666
			};
		},
		methods: {
			changeName() {
				this.name = 'Anna';
			},
			resetName() {
				this.name = 'Parent';
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>

<style scoped>
	div {
		background-color: lightblue;
	}
</style>