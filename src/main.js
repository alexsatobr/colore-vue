// import FirebaseApp from './firebase';	
import Vue from 'vue'
import VueFire from 'vuefire';
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './Login.vue';
// import Content from './Content.vue';

export const eventBus = new Vue();

Vue.use(VueRouter);

// explicit installation required in module environments
Vue.use(VueFire);

const router = new VueRouter ({
	routes: [
		{ path: '', component: Login }
		// { path: '/home', component: Content}
	],
	mode: 'history'
});




new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
