import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBJJc3RuKNsxp0BiX3ZSXXb8Fk3MN10r3w',
    authDomain: 'monarch-styles.firebaseapp.com',
    databaseURL: 'https://monarch-styles.firebaseio.com',
    projectId: 'monarch-styles',
    storageBucket: '',
    messagingSenderId: '510522669876',
    appId: '1:510522669876:web:2f2f29ecf707c438'
};

firebase.initializeApp(config);