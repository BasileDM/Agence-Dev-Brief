let formulaire = `
<form action="#" method="post">
<fieldset>
   <legend>Informations personnelles</legend>
   <div class="field">
      <label for="first_name">Nom : </label>
      <input type="text" name="first_name" />
   </div>
   <div class="field">
      <label for="first_name">Prénom* : </label>
      <input type="text" name="first_name" required />
   </div>
   <div class="field">
      <label for="mail">E-Mail : </label>
      <input type="email" name="mail" />
   </div>
</fieldset>
</form>`;
// Est ce que le bouton soumettre je dois le mettre en JS ou en HTML ? 
// Si je le mets en JS comment je peux ensuite le sélectionner? 

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const CTAFormulaire = document.getElementById("CTA-formulaire");
const croixBouton = document.getElementById("closeButton");

function apparitionBoite() {
  changeCouleurFond();
  setTimeout(() => {
    popUp.classList.replace("invisible", "visible");
    contenuPopup.innerHTML = formulaire;
  }, 10);
}

function disparitionBoite() {
  popUp.classList.replace("visible", "invisible");
}

CTAFormulaire.addEventListener("click", apparitionBoite);
croixBouton.addEventListener("click", disparitionBoite);

document.addEventListener("click", function (event) {
  if (popUp.classList.contains("visible") && !popUp.contains(event.target)) {
    disparitionBoite();
  }
});

function changeCouleurFond () {
  let body = document.body;
  let boite = document.getElementById("boiteGetReady");
  body.style.backgroundColor = "grey";
  boite.style.backgroundColor = "grey";
}

// let submit = document.getElementById("submit_button");
// submit.innerHTML = "Bravo vous êtes enregistrés";

// Mettre un fond écran flouté derrière la boîte CTA
// Quand questionnaire rempli > soumettre et la div met message 'bravo vous êtes enregistré'