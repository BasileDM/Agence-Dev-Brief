//#region Variables
const formulaire = `
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
const emplacementErreur = document.getElementById("messageErreur");
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
   effacerErreur();
}

function gererEnvoi(event) {
   const champNom = document.getElementById("nom");
   const champPrenom = document.getElementById("prenom");

   event.preventDefault(); // Ne pas utiliser méthode traditionelle d'envoi de formulaire

   const erreurNom = "Votre nom doit être entre 3 et 12 lettres.";
   const erreurNomEtPrenom = "Nom et prenom entre 3 et 12 lettres demandés.";
   const erreurPrenom = "Votre prenom doit être entre 3 et 12 lettres.";

   let nomValide = verifierLongueur(champNom, 2, 12);
   let prenomValide = verifierLongueur(champPrenom, 2, 12);

   if (prenomValide && !nomValide) {
      afficherErreur(erreurNom);
   } else if (!prenomValide && nomValide) {
      afficherErreur(erreurPrenom);
   } else if (!prenomValide && !nomValide) {
      afficherErreur(erreurNomEtPrenom);
   } else if (prenomValide && nomValide) {
      effacerErreur();
      setTimeout(() => {
         contenuPopup.innerHTML = "Bravo vous êtes bien enregistré.e.s!";
      }, 10);
      setTimeout(() => {
         cacherPopup();
      }, 2500);
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

function afficherErreur(message) {
   effacerErreur();
   setTimeout(() => {
      jouerSon();
      emplacementErreur.innerText = message;
      emplacementErreur.classList.replace("invisible", "visible");
   }, 50);
   // let espaceChamps = document.getElementsByClassName("field");
   // for (element of espaceChamps) {
   //    element.style.flexDirection = "column";
   // }
}

function effacerErreur() {
   emplacementErreur.classList.replace("visible", "invisible");
}

function jouerSon() {
   let audio = new Audio("audio/Wiz.mp3");
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
