// Select modal elements
const openModalButton = document.getElementById("openModal");
const closeModalButtons = document.querySelectorAll(
  "#closeModal, #closeModalFooter"
);
const modal = document.getElementById("modal");
const confirmAction = document.getElementById("confirmAction");
const modalContent = document.querySelector(".modal-content");

// Open Modal Function
function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  modalContent.focus(); // Set focus to the modal
}

// Close Modal Function
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

// Trap Focus Within Modal
function trapFocus(event) {
  const focusableElements = modal.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

// Handle Escape Key for Modal Close
function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Event Listeners
openModalButton.addEventListener("click", openModal);

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

// Close modal when clicking outside modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Keyboard Events
modal.addEventListener("keydown", trapFocus);
document.addEventListener("keydown", handleEscape);

// Confirm Action
confirmAction.addEventListener("click", () => {
  alert("Action Confirmed!");
  closeModal();
});
console.log(openModalButton, closeModalButtons, modal, modalContent);
