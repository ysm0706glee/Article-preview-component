const shareButton = document.querySelector(".share-button");
const pcShareMenu = document.querySelector(".pc-share-menu");
const defaultFooter = document.querySelector(".default-footer");
const activeFooter = document.querySelector(".active-footer");
const backButton = document.querySelector(".back-button");

function isDesktop() {
  return window.innerWidth >= 768;
}

// Reset all states for desktop/mobile transitions
function resetStates() {
  defaultFooter.classList.remove("hidden");
  activeFooter.classList.remove("visible");
  pcShareMenu.classList.remove("visible");
}

// Handle share button click
shareButton.addEventListener("click", () => {
  if (isDesktop()) {
    pcShareMenu.classList.toggle("visible");
  } else {
    defaultFooter.classList.toggle("hidden");
    activeFooter.classList.toggle("visible");
  }
});

// Handle back button click (mobile only)
if (backButton) {
  backButton.addEventListener("click", () => {
    if (!isDesktop()) {
      defaultFooter.classList.remove("hidden");
      activeFooter.classList.remove("visible");
    }
  });
}

// Debounced resize handler to optimize performance
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    resetStates();
  }, 200); // Adjust debounce timing as needed
});
