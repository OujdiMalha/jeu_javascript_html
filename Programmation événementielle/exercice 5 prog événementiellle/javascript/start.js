document.getElementById("b1").addEventListener("click", ()=>{

let entiers = [];
while (true) {
  let entier = prompt("Entrez un entier ou tapez 'fin' pour quitter");
  // let valeur = document.getElementById("i1").value;
  if (entier === 'fin') {
    break;
  }
  entier = parseInt(entier);
  entiers.push(entier);
}

entiers.sort(function(a, b) {
  return a - b;
});

console.log("Liste triée par ordre croissant : " + entiers);

let plusPetiteValeur = entiers[0];
let plusGrandeValeur = entiers[entiers.length - 1];

console.log("Plus petite valeur : " + plusPetiteValeur);
console.log("Plus grande valeur : " + plusGrandeValeur);