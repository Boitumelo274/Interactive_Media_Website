// Form Validation Script
// Handles client-side validation for contact form

//Get form elements
const form = document.getElementById("contact-form");
const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const message = document.getElementById("input-message");

// Add submit event listener to form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh on form submission

  validateInputs(); // Run validation checks
});

//error message handling
//Displays error message for an input field
const setError = (element, message) => {
  const inputControl = element.parentElement; // Get the parent .form-group div
  const errorDisplay = inputControl.querySelector(".error"); // Find error message container

  errorDisplay.innerText = message; // Set error text
  inputControl.classList.add("error"); // Add red border styling
  inputControl.classList.remove("success"); // Remove green border styling
};

//success handling
//Displays success state for an input field
const setSuccess = (element) => {
  const inputControl = element.parentElement; // Get the parent .form-group div
  const errorDisplay = inputControl.querySelector(".error"); // Find error message container

  errorDisplay.innerText = ""; // Clear any error message
  inputControl.classList.add("success"); // Add green border styling
  inputControl.classList.remove("error"); // Remove red border styling
};

//Validates email format using regular expression
const isValidEmail = (email) => {
  // Regular expression for standard email format validation
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); // Convert to lowercase and test against regex
};

//Main validation function - checks all form inputs
const validateInputs = () => {
  // Get input values and remove whitespace
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // Validate name field
  if (nameValue === "") {
    setError(name, "Name is required"); // Empty name error
  } else {
    setSuccess(name); // Name is valid
  }

  // Validate email field
  if (emailValue === "") {
    setError(email, "Email is required"); // Empty email error
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email); // email is valid
  }

  // Validate message field
  if (messageValue === "") {
    setError(message, "Write a message"); // Empty message error
  } else {
    setSuccess(message); //message is valid
  }
};
