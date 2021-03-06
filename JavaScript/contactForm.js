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
const messagesRef = firebase.database().ref("contactUS_messages");

// Save message to firebase
function saveMessage(name, email, message) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name,
        email,
        message
    });
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    const name = getInputVal("name");
    const email = getInputVal("email");
    const message = getInputVal("message");

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();

}

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);