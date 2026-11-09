// Keep the copyright year current without manually editing the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the navigation menu on mobile screens.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Toggle navigation");
});

// Close the mobile menu after a visitor chooses a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Toggle navigation");
  });
});
