<template>
	<div class="container">
		<h1>Home</h1>
		<button @click="logOut">Log Out</button>
 		
  	</div>

</template>

<script>
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

    	}
    },
    methods: {
    	logOut: function() {
    		 firebase.auth().signOut();
    	} 
    }
  }
</script>