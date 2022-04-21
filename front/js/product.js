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