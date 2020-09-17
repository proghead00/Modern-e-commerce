import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAhZFl4-GAXaHFXADIXKWbXWZ7bvZ3amKo',
	authDomain: 'clone-9546b.firebaseapp.com',
	databaseURL: 'https://clone-9546b.firebaseio.com',
	projectId: 'clone-9546b',
	storageBucket: 'clone-9546b.appspot.com',
	messagingSenderId: '399602234887',
	appId: '1:399602234887:web:14f212c5b6cbd8e26d9ca2',
	measurementId: 'G-E9JGXZ9DNL'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
