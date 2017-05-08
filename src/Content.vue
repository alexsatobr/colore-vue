<template>
	<aside class="lg-side">
		<h1>{{ currentView. title }}</h1>
		<keep-alive>
			<component :is="currentView.tag"></component>
		</keep-alive>		
	</aside>
</template>	

<script>
	import Login from './Login.vue';

	export default {
		data() {
			return {
				history: [
				{
					tag: 'app-login',
					title: 'Login'
				}]
			};
		},
		
		computed: {
			currentView(){
				return this.history[0];
			}
		},

		components: {
			appLogin: Login
		}
	}
</script>