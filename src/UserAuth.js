import Firebase from 'firebase';
import FirebaseAuth from './firebase';


const getUserStatus = function() {

  return firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        console.log("Sign-in provider: "+firebaseUser.providerId);
        console.log("  Provider-specific UID: "+firebaseUser.uid);
        console.log("  Name: "+firebaseUser.displayName);
        console.log("  Email: "+firebaseUser.email);
        console.log("  Photo URL: "+firebaseUser.photoURL);

        // keepUid = firebaseUser.uid;

        // var readDbName = firebase.database().ref('users').child(firebaseUser.uid).on('value', function(snapshot){
        //   userNameDb = snapshot.val().nome;
        //   displayName.innerHTML = "Bem-vindo " + userNameDb;
        // });

        // var getImagePath = firebase.database().ref('imagens').child(firebaseUser.uid).on('value',function(snapshot){
        //   var dbImg = snapshot.val();
        //   if(dbImg != null){
        //     profileImg = snapshot.val().url;
        //     fileNameDb = snapshot.val().filename;
        //     foto = document.getElementById('profileImg');
        //     foto.src = profileImg;
        //   } else {
        //     console.log('usuário sem imagem');
        //   }

        // });
        // const displaySala = document.getElementById('displaySala');

        //   var readDbSala = firebase.database().ref('salas').child(firebaseUser.uid).orderByKey().on('value', function(snapshot){

        //     displaySala.innerText = "Salas cadastradas";
        //     snapshot.forEach(function(data) {
        //       console.log(data.key);
        //       const exibirEscola = data.val().escola;
        //       const li = document.createElement('li');
        //       const exibirpin = data.val().pin;
        //       const limitealunos = data.val().limite_alunos;
        //       li.innerText = "escola: " +exibirEscola+ "; sala: " + data.key + "; pin: "+exibirpin + "; limite de alunos: "+limitealunos;
        //       displaySala.appendChild(li);
        //     });

        //   });


        // }
      // btnLogout.classList.remove('hide');
      } else {
        console.log('not logged in');
        // btnLogout.classList.add('hide');
        // sec2.classList.add('hide');


      }
  });
}

export { getUserStatus };

