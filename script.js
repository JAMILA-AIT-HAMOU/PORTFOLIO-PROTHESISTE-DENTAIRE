// Save last section or footer before refresh
document.querySelectorAll("section, footer").forEach((element) => {
  element.addEventListener("mouseenter", () => {
      localStorage.setItem("lastSection", element.id || "footer");
  });
});

// Scroll to last section or footer after reload
window.addEventListener("load", () => {
  const lastSection = localStorage.getItem("lastSection");
  if (lastSection) {
      document.getElementById(lastSection)?.scrollIntoView();
  }})