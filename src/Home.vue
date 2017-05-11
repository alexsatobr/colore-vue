<template>
  <div class="container">
    <h1>Home</h1>
    <h1>Bem-vindo {{ nome }} </h1>
    <button @click="logOut">Log Out</button>

    <div class="col-md-6">
      <h1 id="display"></h1>
    </div>
    <div class="col-md-6">
      <button id="excludeBtn" type="button">Excluir foto</button>
      <img id="profileImg" />
    </div>

  </div>


</template>

<script>
  import {usersRef} from './firebase';
  import {db} from './firebase';


  export default {
    beforeCreate  : function() {
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          this.loggedin = 'true';
            console.log(firebaseUser);
            console.log("Sign-in provider: "+firebaseUser.providerId);
            console.log("  Provider-specific UID: "+firebaseUser.uid);
            console.log("  Name: "+firebaseUser.displayName);
            console.log("  Email: "+firebaseUser.email);
            console.log("  Photo URL: "+firebaseUser.photoURL);
            this.uid = firebaseUser.uid;
            var nomeDB;
            var acessoDB = db.ref('users').child(this.uid).on('value', function(snapshot){
              nomeDB = snapshot.val().nome;
              if(!snapshot){
                this.$router.push('/cadastro-complementar');
              }
            });
            this.nome = nomeDB;
           
           
            // console.log(uid);
            // });
            this.$router.push('/home');

        } else {
            console.log('not logged in');
            this.$router.push('/');
        }
     
        

      });

    },


    data() {
      return {
        nome: '',
        uid: ''

      }
    },

    methods: {
      logOut: function() {
         firebase.auth().signOut();
      }
    }
  }
</script>
