const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");

// Real-time validation function
function validateField(field, errorElement, validator, errorMessage) {
  if (validator(field.value)) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
    field.setCustomValidity("");
  } else {
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("hidden");
    field.setCustomValidity(errorMessage);
  }
}

// Validation rules
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidPassword = (value) => value.length >= 8 && /\d/.test(value);
const isValidPhone = (value) => /^[0-9]{10}$/.test(value);

// Event listeners for real-time validation
email.addEventListener("input", () =>
  validateField(email, emailError, isValidEmail, "Enter a valid email address.")
);

password.addEventListener("input", () =>
  validateField(
    password,
    passwordError,
    isValidPassword,
    "Password must be at least 8 characters and include a number."
  )
);

phone.addEventListener("input", () =>
  validateField(
    phone,
    phoneError,
    isValidPhone,
    "Enter a 10-digit phone number."
  )
);

// Form submission validation
form.addEventListener("submit", (event) => {
  const emailValid = isValidEmail(email.value);
  const passwordValid = isValidPassword(password.value);
  const phoneValid = isValidPhone(phone.value);

  if (!emailValid || !passwordValid || !phoneValid) {
    event.preventDefault();
    validateField(
      email,
      emailError,
      isValidEmail,
      "Enter a valid email address."
    );
    validateField(
      password,
      passwordError,
      isValidPassword,
      "Password must be at least 8 characters and include a number."
    );
    validateField(
      phone,
      phoneError,
      isValidPhone,
      "Enter a 10-digit phone number."
    );
  }
});
