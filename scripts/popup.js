//#region Variables
const formulaire = `
<form id="myform" action="#" method="post" onsubmit="gererEnvoi(event)">
   <fieldset>
      <legend>Ready to grow your fanbase ?</legend>
      <div class="field">
         <label for="nom" >Last Name* : </label>
         <input name="nom" placeholder="Gardin" type="text" id="nom" required />
         <p class="invisible"> </p>
      </div>
      <div class="field">
         <label for="prenom">First Name* : </label>
         <input  name="prenom" placeholder="Blanche" type="text" id="prenom" required />
         <p class="invisible"> </p>
      </div>
      <div class="field">
         <label for="email">E-Mail* : </label>
         <input  name="email" placeholder="blanche.gardin@gmail.com" type="email" id="email" required />
      </div>
      <div class="field">
         <input type="submit" value="Let's grow !" id="submit_button"  />
      </div>
   </fieldset>
</form>`;

const plans = `<div class="plans-container">
<div class="plan">
   <h4>Free plan</h4>
   <img src="images/lock-open-solid.svg" alt="Free plan : an image of an open lock" title="Free plan">
   <p id="item-1-free">50 Discussions per day</p>
   <p id="item-2-free">Unlimited space</p>
</div>
<div class="plan">
   <h4>Paid plan</h4>
   <img src="images/money-bag-solid.svg" alt="Paid plan : An image of a bag of money" title="Paid plan">
   <p id="item-1-paid">Unlimited discussions !</p>
   <p id="item-2-paid">Unlimited space</p>
</div>
</div>
<div class="plan-form">
<form id="planForm" action="#" method="POST" onsubmit="gererEnvoiPlans(event)">
   <fieldset><strong>Pick a plan : </strong>
      <div>
         <label for="freePlan">Free</label>
         <input type="radio" name="selectedPlan" value="free" id="freePlan">
      </div>
      <div>
         <label for="paidPlan">Paid</label>
         <input type="radio" name="selectedPlan" value="paid" id="paidPlan">
      </div>
      <input type="submit" name="submit" id="submit" value="Go">
   </fieldset>
</form>
</div>`;

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const formulaireCTA = document.getElementById("CTA-formulaire");
const formulaireCTAHeader = document.getElementById("CTA-formulaire-header");
const topButtonCTA = document.getElementById("button-calltoaction-top");
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
formulaireCTAHeader.addEventListener("click", () => afficherPopup(formulaire));
topButtonCTA.addEventListener("click", () => afficherPopup(plans));
croixBouton.addEventListener("click", cacherPopup);
document.addEventListener("click", function (event) {
   if (popUp.classList.contains("visible") && !popUp.contains(event.target)) {
      cacherPopup();
   }
});
