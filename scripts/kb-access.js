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
                apparitionBoite();
                break
            case 2 :
                darkMode();
                darkMode2();
                break
        }
    }
}