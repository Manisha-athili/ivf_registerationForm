
  document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      age: formData.get("age"),
      consultancy: formData.get("consultancy"),
      tryingYears: formData.get("tryingYears"),
      gender: formData.get("gender")
    };

    try {
      const response = await fetch("http://localhost:3000/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("You have registered in the assurance program!");
        this.reset();
      } else {
        alert("Failed to register. Try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });

