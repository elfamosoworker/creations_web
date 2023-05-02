const btn = document.querySelector("a");
const p = document.getElementById("txt");
const img = document.getElementById("monimg");

let style = img.getAttribute("img");

img.classList.add("hide");
img_false = "../images/troll.jpeg";
img_true = "../images/kdo.jpeg"



btn.addEventListener('click', () => {
    if (confirm("Veux-tu un cadeau ?")) {
        img.classList.remove("hide");
        img.removeAttribute("style");
        p.innerHTML = "Tiens !";
        img.src = img_true;
    } else {
        img.classList.remove("hide");
        img.setAttribute("style", "width: 300px","height: 150px");
        p.innerHTML = "Pas de cadeau !";
        img.src = img_false;
    }
})   

function overbutton () {
    if (btn.addEventListener('mouseout', () => { p.classList.remove("hide") }));
    else 
        btn.addEventListener('mouseover', () => { p.classList.add("hide") });
}

overbutton();