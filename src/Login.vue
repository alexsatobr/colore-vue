

<template>
	<section id="sec1" class="section">
	    <input v-model="email" id="txtEmail" type="text" name="email" placeholder="email">
	    <input v-model="password" id="txtPassword" type="password" name="password" placeholder="password">
	    <button id="btnLogin" @click="login" class="btn btn-action">Log In</button>
	    <!-- <button id="btnSignUp" class="btn btn-secondary">Sign Up</button> -->
	    <button id="btnLogout" class="btn btn-primary hide">Log Out</button>
	    <button id="btnRegistre" class="btn btn-primary">Registre-se</button>
	    <button id="btnGoogle" class="btn btn-primary">Registrar com o Gmail</button>
	    <h1> {{ email }} </h1>
	    <h1> {{ password }} </h1>
	    <h1> {{ loggedin }} </h1>

  	</section>
</template>	

<script>
	import {db} from './firebase';

	export default {
		mounted: function() {
    		firebase.auth().onAuthStateChanged(firebaseUser => {
		    	if(firebaseUser) {
		    		this.loggedin = 'true';
			        console.log(firebaseUser);
			        console.log("Sign-in provider: "+firebaseUser.providerId);
			        console.log("  Provider-specific UID: "+firebaseUser.uid);
			        console.log("  Name: "+firebaseUser.displayName);
			        console.log("  Email: "+firebaseUser.email);
			        console.log("  Photo URL: "+firebaseUser.photoURL);

	  			} else {
	        		console.log('not logged in');
        		}
        	});

  		},	
		data() {
			return {
				email: '',
				password: '',
				loggedin: 'false'
			}
		},
		firebase: {
		    users: {
		      source: db.ref('users'),
		      // Optional, allows you to handle any errors.
		      cancelCallback(err) {
		        console.error(err);
		      }
		    }
		},
  		methods: {
  			login: function(){
  				firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(e => console.log(e.message));
  				console.log('Foi');
  			}
   		}

	}
</script>