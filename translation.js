// Variables
let isEnglish = true;
let translationArray = [
    [document.getElementsByTagName('title')[0], "Huddle | Grow", "Huddle | Grandis"],
    [document.getElementById('button-calltoaction-top'), "Try it free", "Essai gratuit"],
    [document.querySelector('header h1'), "Build The Community Your Fans Will Love", "Construisez une communauté inoubliable" ],
    [document.querySelector('header p'), "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.", 
    "Huddle réinvente votre façon de construire une communauté. Vous avez une voix, mais votre audience aussi. Connectez avec vos utilisateurs lors d'authentiques discussions."],
    [document.getElementsByClassName('boutonRose')[0], "Get Started For Free", "Démarrez gratuitement" ],
    [document.querySelectorAll('main section h3')[0], "Grow Together", "Évoluez ensemble"],
    [document.querySelectorAll('main section p')[0], "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.", 
    "Générez des discussions significatives avec votre public et construisez une communauté forte et fidèle. Pensez aux conversations perspicaces auxquelles vous ne participez pas avec un formulaire de feedback."],
    [document.querySelectorAll('main section h3')[1], "Flowing Conversations", "Des conversations fluides"],
    [document.querySelectorAll('main section p')[1], "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
     "Vous ne pagineriez pas une conversation dans la vie réelle, alors pourquoi le faire en ligne ? Nos fils de discussion se chargent au fur et à mesure pour un flux plus naturel."],
    [document.querySelectorAll('main section h3')[2], "Your Users", "Vos utilisateurs"],
    [document.querySelectorAll('main section p')[2], "It takes no time at all to integrate Huddle with your app's authentification solution. This means, once signed in to your app, your users can start chatting immediately.", 
    "Il ne faut que quelques instants pour intégrer Huddle avec la solution d'authentification de votre application. Cela signifie que, une fois connectés à votre application, vos utilisateurs peuvent commencer à discuter immédiatement."],
    [document.querySelector('#boiteGetReady h2'), "Ready To Build Your Community?", "Prêt à créer une communauté?"],
    [document.getElementsByClassName('boutonRose')[1], "Get Started For Free", "Démarrez gratuitement" ],
    [document.querySelector('footer #about'), "About Us", "À propos" ],
    [document.querySelector('footer #what'), "What We Do", "Nos produits" ],
    [document.querySelector('footer #career_2'), "Career", "Carrière" ],
    [document.querySelector('footer #contact'), "Contact Us", "Nous joindre" ]
]

// Functions
function switchLanguage() {
    if (isEnglish == true) {
        for (let i = 0; i < translationArray.length; i++) {
            translationArray[i][0].textContent = translationArray[i][2];
        }
        document.getElementById('flag').setAttribute('src', 'images/fr-flag.svg')
        isEnglish = false;
    } else {
        for (let i = 0; i < translationArray.length; i++) {
            translationArray[i][0].textContent = translationArray[i][1];
        }
        document.getElementById('flag').setAttribute('src', 'images/en-flag.svg')
        isEnglish = true;
    }
}

// Main code
document.getElementById('language').addEventListener("click", switchLanguage);