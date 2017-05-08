
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCXkptjdfqMRi62N3O3JHxPK6WtkGoJrxA",
	authDomain: "colore-e6251.firebaseapp.com",
	databaseURL: "https://colore-e6251.firebaseio.com",
	projectId: "colore-e6251",
	storageBucket: "colore-e6251.appspot.com",
	messagingSenderId: "519742155779"
});
  

export const db = firebaseApp.database();