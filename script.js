// Updated script.js with CORS proxy
document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  // Create an object to hold form data
  const formData = new FormData(this);
  const data = {
    id: generateID(), // Generate a random ID
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("Phone"),
    age: formData.get("age"),
    consultancy: formData.get("consultancy"),
    tryingYears: formData.get("tryingYears"),
    gender: formData.get("gender") // Will be either Male, Female, or Prefer not to say
  };
  
  try {
    // Use a CORS proxy service
    const corsProxyUrl = "https://corsproxy.io/?";
    const targetUrl = "https://ivf-registrationform.onrender.com/registrations";
    
    console.log("Submitting data:", data);
    console.log("Sending request to:", corsProxyUrl + targetUrl);
    
    const response = await fetch(corsProxyUrl + targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest" // Required by some CORS proxies
      },
      body: JSON.stringify(data)
    });

    console.log("Response status:", response.status);
    
    // Check if the request was successful
    if (response.ok) {
      alert("You have successfully registered in the assurance program!");
      this.reset(); // Reset the form after successful submission
    } else {
      const errorText = await response.text();
      console.error("Server error response:", errorText);
      alert(`Failed to register. Server responded with: ${response.status}`);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Error: " + error.message); // If there is any error, alert the user
  }
});

// Helper function to generate a random ID similar to your existing IDs
function generateID() {
  return Math.floor(Math.random() * 65536).toString(16).padStart(4, '0');
}