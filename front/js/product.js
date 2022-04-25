import {Panier} from "./panier";


let adresseSite = document.URL;
let url = new URL(adresseSite);
let idUrl = url.searchParams.get("id");

fetch("http://localhost:3000/api/products/" + idUrl).then(response => {
    // reponse http et le .then sera exécuté quand API aura répondu
    response.json().then(product => {
            creationProduit(product)
    });
})


function creationProduit(c){
    // créer img dans div class = item__img
    let parent = document.getElementsByClassName("item__img")[0];
    let img = document.createElement("img");
    // ajouter src (du produit) à img 
    img.src = c.imageUrl;
    // ajouter alt (du produit) à img 
    img.alt = c.altTxt;
    // ajouter titre text (nom du produit) à id= title 
    let titreProduit = document.getElementById("title");
    titreProduit.innerText = c.name; 
    // ajouter prix (du produit) à id = price
    let prixProduit = document.getElementById("price");
    prixProduit.innerText = c.price;
    // ajouter description à id = description
    let descriptionProduit = document.getElementById("description");
    descriptionProduit.innerText = c.description;
    let select = document.getElementById("colors");

    c.colors.forEach(color => {
        // créer option à id = colors
        let option = document.createElement("option");
        // ajouter value "vert" à option 
        option.setAttribute("value", color);
        option.innerText = color;
        select.appendChild(option);
    });
    parent.appendChild(img);
}


// ajout d'un produit dans le panier
let button = document.getElementById("addToCart");
button.onclick = ajout

function ajout(e){
    let choixColor = document.getElementById("colors");
    let color = choixColor.value;
    
    let nombreArticle = document.getElementById("quantity");
    let quantiteArticle = nombreArticle.value;
    
    let lignePanier = {
        id: idUrl, 
        quantite: quantiteArticle,
        couleur: color,
    }
}

// instancier une classe + création d'un panier
let monPanier = new Panier();
console.log(monPanier)