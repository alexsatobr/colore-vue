<template>
	<section id="sec1" class="section">
	    <input v-model="email" id="txtEmail" type="text" name="email" placeholder="email">
	    <input v-model="password" id="txtPassword" type="password" name="password" placeholder="password">
	    <button id="btnLogin" @click="login" class="btn btn-action">Log In</button>
	    <!-- <button id="btnSignUp" class="btn btn-secondary">Sign Up</button> -->
	    <button id="btnLogout" class="btn btn-primary hide">Log Out</button>
	    <button id="btnRegistre" @click="cadastro" class="btn btn-primary">Cadastre-se</button>
	    <button id="btnGoogle" @click="signInWithGoogle" class="btn btn-primary">Registrar com o Gmail</button>
	    <h1> {{ email }} </h1>
	    <h1> {{ password }} </h1>
	    <h1> {{ loggedin }} </h1>
	    <h1> {{ firstName }} </h1>

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
				this.$router.push('/home');

  			} else {
        		console.log('not logged in');
        		this.$router.push('/');
      		}
      	});

  	},
		data() {
			return {
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				loggedin: 'false',
				cadastroGoogle: 'false'
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
  			},
  			cadastro: function(){
  				this.$router.push('/cadastro');
  			},
     	 	goHome(){
     	 		this.loggedin == true ? this.$router.push('/home') : this.$router.push('/');
     	 	},
     	 	signInWithGoogle: function() {
     	 		var firstName;
    			var lastName;
		        const provider = new firebase.auth.GoogleAuthProvider();
		        firebase.auth().signInWithPopup(provider).then(function(result) {
		        	var token = result.credential.accessToken;


				  	// The signed-in user info.
				  	var objUser = result.user;
				  	var a = objUser.displayName.indexOf(' ');
      				firstName = objUser.displayName.substring(0, a);
      				lastName = objUser.displayName.substring(a + 1);
      				this.firstName = firstName;
      				this.lastName = lastName;
			
				  // 	var acessoDB = db.ref('users').child(result.uid).on('value', function(snapshot){
              			
      //         			if(!snapshot){
      //           			this.cadastroGoogle = 'true';
      //         			}
      //       		});

		        }).catch(err => console.log(error))
		    }

   		}

	}
</script>
