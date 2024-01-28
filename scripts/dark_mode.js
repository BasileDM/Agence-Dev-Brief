// Expressing the function outside
// to be able to call it with onkeyup
let darkModeToggle;

function darkMode() {
   const toggleDarkModeButton = document.getElementById("slider");
   const body = document.body;

   darkModeToggle = function () {
      body.classList.toggle("dark-mode");
   };

   toggleDarkModeButton.addEventListener("click", darkModeToggle);
}

document.addEventListener("DOMContentLoaded", darkMode);
