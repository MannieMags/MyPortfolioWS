function toggleMenu() {
  // Select the menu element with class "menu-links"
  const menuElement = document.querySelector(".menu-links");

  // Select the icon element with class "hamburger-icon"
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  // Toggle the "open" class on both the menu and icon elements
  // This will show/hide the menu based on CSS styles
  menuElement.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
