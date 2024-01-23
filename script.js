let formulaire = `
<form id= "myform">
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
   <div class="field">
          <input type="submit" value="Soumettre" id="submit_button" onclick:"apparitionMessage()" />
        </div>
</fieldset>
</form>`;
// Est ce que le bouton soumettre je dois le mettre en JS ou en HTML ? 
// Si je le mets en JS comment je peux ensuite le sélectionner? 

const popUp = document.getElementById("popUp");
const contenuPopup = document.getElementById("contenuPopup");
const CTAFormulaire = document.getElementById("CTA-formulaire");
const croixBouton = document.getElementById("closeButton");
let boutonSubmit = document.getElementById("submit_button");


function apparitionBoite() {
    contenuPopup.innerHTML = formulaire;
    setTimeout(() => {
    popUp.classList.replace("invisible", "visible");
    fondPopUp.classList.replace("invisible","visible");
  }, 10);
}

function disparitionBoite() {
  popUp.classList.replace("visible", "invisible");
  fondPopUp.classList.replace("visible","invisible");
}

function apparitionMessage() {
  setTimeout(() => {
  contenuPopup.innerHTML = "Bravo";},10);
  boutonSubmit.classList.add("invisible");};


CTAFormulaire.addEventListener("click", apparitionBoite);
croixBouton.addEventListener("click", disparitionBoite);
document.addEventListener("click", function (event) {
  if (popUp.classList.contains("visible") && !popUp.contains(event.target)) {
    disparitionBoite();
  }
});

document.addEventListener("submit", function(event){
  if(event.target && event.target.id === "myform") {
    gererSubmit(event);
  }
})
function gererSubmit(event) {
  event.preventDefault();
}

// let submit = document.getElementById("submit_button");
// submit.innerHTML = "Bravo vous êtes enregistrés";
// Quand questionnaire rempli > soumettre et la div met message 'bravo vous êtes enregistré'