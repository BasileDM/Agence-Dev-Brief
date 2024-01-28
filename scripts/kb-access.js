function onKeyUp(event, buttonID) {
   if (event.key === "Enter") {
      switch (buttonID) {
         case 1:
            // Dark mode
            darkModeToggle();
            break;
         case 2:
            // Language flag
            switchLanguage();
            break;
         case 3:
            // Call to action top
            afficherPopup(plans);
            break;
         case 4:
            // Call to action boutonRose hero
            afficherPopup(formulaire);
            break;
         case 5:
            // Hero arrow scroll
            scrollToMain();
            break;
         case 6:
            afficherPopup(formulaire);
            break;
      }
   }
}
