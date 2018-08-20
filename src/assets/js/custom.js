firebase.initializeApp({
  apiKey: 'AIzaSyDXZMi6ZfLPtUB8f2yoU50J8VuT86c2DbQ',
  authDomain: 'dsba-142b3.firebaseapp.com',
  projectId: 'dsba-142b3'
});

const storage = window.localStorage;
const auth = firebase.auth();
const db = firebase.firestore();
