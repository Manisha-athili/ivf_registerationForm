// Add an event listener to the form submission
document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  // Create an object to hold form data
  const formData = new FormData(this);
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("Phone"),
    age: formData.get("age"),
    consultancy: formData.get("consultancy"),
    tryingYears: formData.get("tryingYears"),
    gender: formData.get("gender") // Will be either Male, Female, or Prefer not to say
  };
  
  try {
    // Send a POST request to the JSON server
    const response = await fetch("https://ivf-registrationform.onrender.com/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // Convert the data to a JSON string
    });

    // Check if the request was successful
    if (response.ok) {
      alert("You have successfully registered in the assurance program!");
      this.reset(); // Reset the form after successful submission
    } else {
      alert("Failed to register. Please try again.");
    }
  } catch (error) {
    alert("Error: " + error.message); // If there is any error, alert the user
  }
});
