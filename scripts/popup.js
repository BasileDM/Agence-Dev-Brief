//#region Variables
let formulaire = `
<form id="myform" action="#" method="post" onsubmit="gererEnvoi(event)">
   <fieldset>
      <legend>Informations personnelles</legend>
      <div class="field">
         <label for="nom" >Nom*  </label>
         <input name="nom" placeholder="Gardin" type="text" id="nom" required />
         <p class="invisible"> </p>
      </div>
      <div class="field">
         <label for="prenom">Prénom*  </label>
         <input  name="prenom" placeholder="Blanche" type="text" id="prenom" required />
         <p class="invisible"> </p>
      </div>
      <div class="field">
         <label for="mail">E-Mail*  </label>
         <input  name="mail" placeholder="blanche.gardin@gmail.com" type="email" id="mail" required />
      </div>
      <div class="field">
         <input type="submit" value="Envoyer" id="submit_button"  />
      </div>
   </fieldset>
</form>`;

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const formulaireCTA = document.getElementById("CTA-formulaire");
const croixBouton = document.getElementById("closeButton");
let boutonSubmit = document.getElementById("submit_button");

let erreurNom = "Votre nom doit être entre 3 et 12 lettres";
let erreurNomEtPrenom = "Nom et prenom entre 3 et 12 lettres demandés";
let erreurPrenom = "Votre prenom doit être entre 3 et 12 lettres";
//#endregion

//#region Functions
function afficherPopup(contenu) {
   contenuPopup.innerHTML = contenu;
   setTimeout(() => {
      popUp.classList.replace("invisible", "visible");
      fondPopUp.classList.replace("invisible", "visible");
   }, 10);
}

function cacherPopup() {
   popUp.classList.replace("visible", "invisible");
   fondPopUp.classList.replace("visible", "invisible");
   effacerErreur(document.getElementById("endroitMessage"));
}

function gererEnvoi(event) {
   let champNom = document.getElementById("nom");
   let champPrenom = document.getElementById("prenom");
   let endroitErreur = document.getElementById("endroitMessage");

   // Ne pas utiliser méthode traditionelle d'envoi de formulaire
   event.preventDefault();

   let nomValide = verifierLongueur(champNom, 2, 12);
   let prenomValide = verifierLongueur(champPrenom, 2, 12);
   console.log(`Nom est valide : ${nomValide}`);
   console.log(`Prénom est valide : ${prenomValide}`);

   if (prenomValide && !nomValide) {
      afficherErreur(endroitErreur, erreurNom);
   } else if (!prenomValide && nomValide) {
      afficherErreur(endroitErreur, erreurPrenom);
   } else if (!prenomValide && !nomValide) {
      afficherErreur(endroitErreur, erreurNomEtPrenom);
   } else if (prenomValide && nomValide) {
      effacerErreur(endroitErreur);
      setTimeout(() => {
         contenuPopup.innerHTML = "Bravo vous êtes bien enregistré.e.s!";
      }, 10);
      setTimeout(() => {
         cacherPopup();
      }, 3000);
   }
}

function verifierLongueur(champFormulaire, longueurMin, longueurMax) {
   if (
      champFormulaire.value.length < longueurMax &&
      champFormulaire.value.length > longueurMin
   ) {
      return true;
   } else {
      return false;
   }
}

function afficherErreur(endroitOuLeMettre, message) {
   jouerSon();
   endroitOuLeMettre.innerText = message;
   endroitOuLeMettre.classList.replace("invisible", "visible");
   let espaceChamps = document.getElementsByClassName("field");
   for (element of espaceChamps) {
      element.style.flexDirection = "column";
   }
}

function effacerErreur(endroitOuLeMettre) {
   endroitOuLeMettre.classList.replace("visible", "invisible");
}

function jouerSon() {
   let audio = new Audio("images/Wiz.mp3");
   audio.play();
}
//#endregion

//Main code
formulaireCTA.addEventListener("click", () => afficherPopup(formulaire));
croixBouton.addEventListener("click", cacherPopup);
document.addEventListener("click", function (event) {
   if (popUp.classList.contains("visible") && !popUp.contains(event.target)) {
      cacherPopup();
   }
});
