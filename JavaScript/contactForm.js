import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCZWJJmz2uRU0a1QZf3g9Bc1hdG-6a7scM",
    authDomain: "mwebsite-dsp.firebaseapp.com",
    databaseURL: "https://mwebsite-dsp.firebaseio.com",
    projectId: "mwebsite-dsp",
    storageBucket: "mwebsite-dsp.appspot.com",
    messagingSenderId: "131867965601"
};
firebase.initializeApp(config);

// Reference messages collection
const messagesRef = firebase.database().ref('contactUS_messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    const name = getInputVal('name');
    const email = getInputVal('email');
    const message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();

}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}