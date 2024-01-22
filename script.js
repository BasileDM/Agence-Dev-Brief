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
   <div class="field">
      <input type="submit" value="Soumettre" id="submit_button" />
   </div>

</form>`;

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const CTAFormulaire = document.getElementById("CTA-formulaire");
const croixBouton = document.getElementById("closeButton");

function apparitionBoite() {
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
