let formulaire = `
<form id= "myform" action="#" method="post" onsubmit="apparitionMessage(event)">
<fieldset>
   <legend>Informations personnelles</legend>
   <div class="field">
      <label for="nom" >Nom*  </label>
      <input placeholder="Gardin" type="text" name="nom" id="nom" required />
      <p id="errorNom" class="invisible"> </p>
   </div>
   <div class="field">
      <label for="prenom">Prénom*  </label>
      <input placeholder="Blanche" type="text" name="prenom" id="prenom" required />
      <p id="errorPrenom" class="invisible"> </p>
   </div>
   <div class="field">
      <label for="mail">E-Mail*  </label>
      <input placeholder="blanche.gardin@gmail.com" type="email" name="mail" id="mail" required />
   </div>
   <div class="field">
          <input type="submit" value="Soumettre" id="submit_button"  />
        </div>
</fieldset>
</form>`;

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const CTAFormulaire = document.getElementById("CTA-formulaire");
const croixBouton = document.getElementById("closeButton");
let boutonSubmit = document.getElementById("submit_button");
let erreurNom = "Votre nom doit être entre 3 et 12 lettres";
let erreurNomEtPrenom = "Nom et prenom entre 3 et 12 lettres demandés";
let erreurPrenom = "Votre prenom doit être entre 3 et 12 lettres";

function apparitionBoite() {
  contenuPopup.innerHTML = formulaire;
  setTimeout(() => {
    popUp.classList.replace("invisible", "visible");
    fondPopUp.classList.replace("invisible", "visible");
  }, 10);
}

function disparitionBoite() {
  popUp.classList.replace("visible", "invisible");
  fondPopUp.classList.replace("visible", "invisible");
}

function apparitionMessage(event) {
  event.preventDefault();
  let champNom = document.getElementById("nom");
  let champPrenom = document.getElementById("prenom");
  let nomValide = verifierLongueur(champNom, 2, 12);
  let prenomValide = verifierLongueur(champPrenom, 2, 12);
  let endroitErreurNom = document.getElementById("errorNom");
  let endroitErreurPrenom = document.getElementById("errorPrenom");
  console.log(nomValide);
  console.log(prenomValide);
  if (nomValide == false && prenomValide == true) {
    RetourneMessageErreur(endroitErreurNom, erreurNom);
  } else {
    effacerMessageErreur(endroitErreurNom);
  }
  if (prenomValide == false && nomValide == true) {
    RetourneMessageErreur(endroitErreurPrenom, erreurPrenom);
  } else {
    effacerMessageErreur(endroitErreurPrenom);
  }

  if (prenomValide == false && nomValide == false) {
    RetourneMessageErreur(endroitErreurNom, erreurNomEtPrenom);
  }

  if (prenomValide == true && nomValide == true) {
    setTimeout(() => {
      contenuPopup.innerHTML = "Bravo vous êtes bien enregistré.e.s!";
    }, 10);
    setTimeout(() => {
      disparitionBoite();
    }, 5000);
  }
}

CTAFormulaire.addEventListener("click", apparitionBoite);
croixBouton.addEventListener("click", disparitionBoite);
document.addEventListener("click", function (event) {
  if (popUp.classList.contains("visible") && !popUp.contains(event.target)) {
    disparitionBoite();
  }
});
// let submit = document.getElementById("submit_button");
// submit.innerHTML = "Bravo vous êtes enregistrés";
// Quand questionnaire rempli > soumettre et la div met message 'bravo vous êtes enregistré'

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

function RetourneMessageErreur(endroitOuLeMettre, message) {
  endroitOuLeMettre.innerText = message;
  endroitOuLeMettre.classList.replace("invisible", "visible");
  let espaceChamps = document.getElementsByClassName("field");
  for (element of espaceChamps) {
    element.style.flexDirection = "column";
  }
}

function effacerMessageErreur(endroitOuLeMettre) {
  endroitOuLeMettre.classList.replace("visible", "invisible");
}
