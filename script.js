

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD_EN2YfjDn3vBaN-NdBKrlDTzs0a-cnww",
    authDomain: "ivf-dip.firebaseapp.com",
    projectId: "ivf-dip",
    storageBucket: "ivf-dip.appspot.com",
    messagingSenderId: "523010731456",
    appId: "1:523010731456:web:f6bcedc6b287d4c1312c25"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Attach event listener to form
  document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("Phone"),
      age: formData.get("age"),
      consultancy: formData.get("consultancy"),
      tryingYears: formData.get("tryingYears"),
      gender: formData.get("gender")
    };

    try {
      await addDoc(collection(db, "registrations"), data);
      alert("You have successfully registered in the assurance program!");
      this.reset();
    } catch (error) {
      alert("Error saving to Firebase: " + error.message);
    }
  });

