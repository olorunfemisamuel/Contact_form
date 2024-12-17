document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const inputs = document.querySelectorAll("input, textarea");
    const errorMessages = document.querySelectorAll(".error-message");
    //const submitBtn = document.getElementById("submit-btn");
  
    // Helper function to validate fields
    function validateField(input, errorMessage) {
      if (input.type === "checkbox") {
        if (!input.checked) {
          input.classList.add("error");
          errorMessage.style.display = "block";
          return false;
        }
      } else if (input.value.trim() === "") {
        input.classList.add("error");
        errorMessage.style.display = "block";
        return false;
      } else {
        input.classList.remove("error");
        errorMessage.style.display = "none";
        return true;
      }
    }
  
    // Form submission handler
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let valid = true;
  
      // Loop through all inputs and check validity
      inputs.forEach((input, index) => {
        const errorMessage = errorMessages[index];
        if (!validateField(input, errorMessage)) {
          valid = false;
        }
      });
  
      // If all fields are valid
      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
        inputs.forEach((input) => input.classList.remove("error"));
      }
    });
  
    // Remove error styles when user interacts with inputs
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        input.classList.remove("error");
        errorMessages[index].style.display = "none";
      });
    });
  });
  