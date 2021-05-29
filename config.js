import * as firebase from 'firebase';

require('@firebase/firestore');
var firebaseConfig={
    apiKey: "AIzaSyCMI0iNqKaNYfGY5-QWj52_feBuRLlUpIw",
    authDomain: "wilyapp-bce10.firebaseapp.com",
    projectId: "wilyapp-bce10",
    databaseURL: "https://wilyapp-bce10.firebaseio.com",
    storageBucket: "wilyapp-bce10.appspot.com",
    messagingSenderId: "367480065818",
    appId: "1:367480065818:web:66e9c0f03d704bc89726a3"
}

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();