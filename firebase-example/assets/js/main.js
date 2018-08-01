firebase.initializeApp({
	apiKey: 'AIzaSyDXZMi6ZfLPtUB8f2yoU50J8VuT86c2DbQ',
	projectId: 'dsba-142b3'
});

const db = firebase.firestore();


$(document).ready(() => {
	db.collection("dataset").add({
		name: "jisu"
	}).then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	}).catch(function(error) {
		console.error("Error adding document: ", error);
	});
})

