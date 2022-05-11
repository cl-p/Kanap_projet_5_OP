import { Panier } from "./panier";

// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher
let recapitulatifPanier = new Panier();
let articlesPanier = recapitulatifPanier.cart()
let total = 0
let totalQuantiteCanape = 0

articlesPanier.forEach(element => {
    creationLignePanier(element)
    let totalPourUneLigne = parseInt(element.quantiteProduit) * parseInt(element.prixProduit)
    total = total + totalPourUneLigne
    let totalQuantiteCanapePourUneLigne = parseInt(element.quantiteProduit)
    totalQuantiteCanape = totalQuantiteCanape + totalQuantiteCanapePourUneLigne
});


function creationLignePanier(ligne){

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
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${ligne.quantiteProduit}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
    `



    listeArticles.append(article)
}


// ajouter nb d'articles total du panier dans id = "totalQuantity"
let afficherQuantiteCanape = document.getElementById("totalQuantity")
afficherQuantiteCanape.innerText = totalQuantiteCanape



// ajouter prix total du panier dans id = "totalPrice"
let afficherTotalPanier = document.getElementById("totalPrice")
afficherTotalPanier.innerText = total








// ajouter message d'erreur dans id = "firstNameErrorMsg"
