/* éléments manipulable du document */
const btn = document.querySelector("a");

/* taille d'écran */
let longueur = window.innerWidth;
let hauteur = window.innerHeight;


/* variables modifiées/modifiables durant l'exécution du mini-jeu */
let haut;
let long;


function plusGrand (premier, deuxieme) {
    return Math.max(premier, deuxieme);
}

function getRandom() {
    haut = Math.round(Math.random() * (hauteur - 50) + 1);
    long = Math.round(Math.random() * (longueur - 50) + 1);
    
}

btn.addEventListener('mouseover', () => {
    getRandom();
    btn.style.left=long+"px";
    btn.style.top=haut+"px";
    console.log(haut);
})



btn.addEventListener('click', () => {
    alert("Réussi !");
})   
