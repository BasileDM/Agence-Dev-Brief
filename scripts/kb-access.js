// function onKeyUp(event) {
//     console.log(event.key);
//     if (event.key === "Enter") {
//         apparitionBoite();
//     }

// }

function onKeyUp(event, buttonID){
    if (event.key === "Enter") {
        switch (buttonID) {
            case 1 :
                // Dark mode
                darkModeToggle();
                break
            case 2 :
                // Language flag
                switchLanguage();
                break
            case 3 :
                // Call to action top
                break
            case 4 :
                // Call to action boutonRose hero
                break
            case 5 :
                // Hero arrow scroll
                scrollToMain();
                break
            case 6 :
                apparitionBoite();
                break
        }
    }
}