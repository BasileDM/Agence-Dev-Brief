function scrollToMain() {
   const mainSection = document.getElementById("main-section");
   mainSection.scrollIntoView({
      behavior: "smooth",
   });
}

document.getElementById("arrow-link").addEventListener("click", scrollToMain);
