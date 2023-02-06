/*
document.getElementById("lien").onclick = function(){
    alert('Attention, lien mort !');
    return false;
};
*/





/*
document.getElementById("lien").addEventListener('click', function(){
    alert('Attention, lien mort !');
    return false;
});
*/





/*
function maFonction(){
    alert('Attention, lien mort !');
    return false;
}

document.getElementById("lien").addEventListener('click', maFonction);
*/





/*
document.getElementById("lien").addEventListener('click', function(e){
    e.preventDefault();
    alert('Attention, lien mort !');
    return false;

});

document.getElementById("lien").addEventListener('contextmenu', function(e){
    if (prompt("Ouverture de menu, confirmez: ") != "ok") {
        e.preventDefault();
        return false;
    }
});
*/


/*
document.querySelector(".bouton").addEventListener('dblclick', function(e) {
    if (prompt("De quelle couleur souhaité changer le couleur de votre texte ? : ") != "ok") {
        e.preventDefault();
        return false;
    }
});
*/





/*
//Capturer le double click sur un bouton, changer le texte du bouton au click

document.querySelector("button").addEventListener("dblclick", clickText);

function clickText() {
    console.log("dblclick");
    let paragraphe = document.querySelector("button.contText");
    paragraphe.innerHTML = "coucouHibou";
}
*/





// Capturer le click sur un bouton, récupérer la valeur d’un input et l’afficher comme texte du bouton

document.getElementById("b1").addEventListener("click", ()=>{
   // console.log("je click sur le boutton b1");
   let valeur = document.getElementById("i1").value;
   if(valeur){
    console.log(valeur)
   }
   else{
    console.log("Champs vide :/")
   }
});





/*
//Capturer un blur sur un input, ajouter le contenu de l’input dans 
//un paragraphe et vider l’input => concaténer les valeurs dans le paragraphe au lieu de l’effacer

let input = document.getElementById("input");
let p = document.querySelector("p");

input.addEventListener("blur", function () {
  p.textContent += input.value + " ";
  input.value = "";
});
*/




/*
// Changer la couleur de fond du body lors d’un mouseenter sur bouton

let button = document.querySelector("button");
button.addEventListener("mouseenter", function () {
  body.style.backgroundColor = "purple";
});






// Changer la couleur du texte du body en fonction d’une valeur fournie par l’utilisateur


let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let couleur = form.elements.couleur.value;
  body.style.color = couleur;
});
*/



/*
let new_paragraph = document.createElement("p");

let paragraph_content = document.createTextNode("ici le contenu de mon paragraphe");
*/



