import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDa-mpxrlY04pJon55S8vx7Hlwn_XnFYvo',
    authDomain: 'monarch-styles-b7ee4.firebaseapp.com',
    databaseURL: 'https://monarch-styles-b7ee4.firebaseio.com',
    projectId: 'monarch-styles-b7ee4',
    storageBucket: '',
    messagingSenderId: '1089585163716',
    appId: '1:1089585163716:web:f038a3a3d9160e51'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('ERROR', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;