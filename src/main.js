// import FirebaseApp from './firebase';	
import Vue from 'vue'
import VueFire from 'vuefire';
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './Login.vue';
import Cadastro from './Cadastro.vue';
import Home from './Home.vue';


// explicit installation required in module environments
Vue.use(VueFire);

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Login },
	{ path: '/cadastro', component: Cadastro },
	{ path: '/home', component: Home }
]

const router = new VueRouter ({
	routes: routes,
	mode: 'history'
}); 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
