import { Panier } from "./panier";

// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher
let recapitulatifPanier = new Panier();
let articlesPanier = recapitulatifPanier.cart()
console.log("coucou")
articlesPanier.forEach(element => {
    creationLignePanier(element)
});


function creationLignePanier(ligne){
    console.log("coucou")
    // créer article
    let listeArticles = document.getElementById("cart__items")
    let article = document.createElement("article")
    // ajouter class
    article.classList.add("cart__item")
    // ajouter id du produit
    article.dataset.id = ligne.idProduit
    // ajouter color du produit
    article.dataset.color = ligne.couleurProduit


    // créer div enfant de article 

    article.innerHTML = `
        <div class="cart__item__img">
            <img src=${ligne.imageProduit} alt=${ligne.altImageProduit}>
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${ligne.nomProduit} </h2>
                <p> ${ligne.couleurProduit} </p>
                <p> ${ligne.prixProduit} €</p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
    `



    listeArticles.append(article)
}


// fetch("http://localhost:3000/api/products/order").then(response =>{
//     response.json().then(article => {
//         insérer fonction
//     })
// })



// ajouter nb d'articles total du panier dans id = "totalQuantity"
// ajouter prix total du panier dans id = "totalPrice"




// ajouter message d'erreur dans id = "firstNameErrorMsg"

// --> SI 2 fois le même article ET couleur différente 
    // --> ELSE IF 2 fois le même article ET même couleur 
        // RETOURNER message erreur

/**
 * if element.idProduit === element.idProduit && element.couleurProduit === element.couleurProduit {
 *  
 * }
 * 
 * 
 *  
 * */ 



// possibilité au client de modifier/ supprimer un article --> regarder icone 