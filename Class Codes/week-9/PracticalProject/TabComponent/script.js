// Select all tab buttons and content sections
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  // Attach click event listener to each tab
  tab.addEventListener("click", () => {
    // Reset all tabs and contents
    tabs.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    contents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Activate clicked tab and show associated content
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const targetContent = document.getElementById(
      tab.getAttribute("aria-controls")
    );
    targetContent.classList.remove("hidden");
  });

  // Keyboard navigation (Arrow keys)
  tab.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      const currentIndex = [...tabs].indexOf(tab);
      const nextIndex =
        event.key === "ArrowRight" ? currentIndex + 1 : currentIndex - 1;
      const newIndex = (nextIndex + tabs.length) % tabs.length;

      tabs[newIndex].focus();
      tabs[newIndex].click();
    }
  });
});
