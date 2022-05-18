import { Panier } from "./panier";

// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher
let recapitulatifPanier = new Panier();
let articlesPanier = recapitulatifPanier.cart()
function supprimerArticle(article){
    recapitulatifPanier.deleteItem(article)
    // utiliser querySelector permet de sélectionner l'article précis que l'on souhaite supprimer 
    let articleASupprimer = document.querySelector('[data-id="'+article.idProduit+'"]')
    // la fonction remove permet de supprimer l'article de la partie visible du panier par l'utilisateur
    articleASupprimer.remove()
}

articlesPanier.forEach(element => {
    creationLignePanier(element)
});


calculTotal(articlesPanier)


function calculTotal (articles){
    // le paramètre articles = tableau d'objets 
    let total = 0
    let totalQuantiteCanape = 0
    articles.forEach(element => {
        let totalPourUneLigne = parseInt(element.quantiteProduit) * parseInt(element.prixProduit)
        total = total + totalPourUneLigne
        let totalQuantiteCanapePourUneLigne = parseInt(element.quantiteProduit)
        totalQuantiteCanape = totalQuantiteCanape + totalQuantiteCanapePourUneLigne
    });


    // ajouter nb d'articles total du panier dans id = "totalQuantity"
    let afficherQuantiteCanape = document.getElementById("totalQuantity")
    afficherQuantiteCanape.innerText = totalQuantiteCanape



    // ajouter prix total du panier dans id = "totalPrice"
    let afficherTotalPanier = document.getElementById("totalPrice")
    afficherTotalPanier.innerText = total
}

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
                    
                </div>
            </div>
        </div>
    `
    let supprimerLigne = article.getElementsByClassName("cart__item__content__settings__delete")[0]
    // <p class="deleteItem" onclick="supprimerArticle(${ligne.idProduit},${ligne.couleurProduit})">Supprimer</p>
    let paragraphe = document.createElement("p")
    paragraphe.classList.add("deleteItem")
    paragraphe.onclick = () => supprimerArticle(ligne)
    paragraphe.innerText = "Supprimer"
    supprimerLigne.appendChild(paragraphe)

    let inputQuantite = article.getElementsByClassName("itemQuantity")[0]
    inputQuantite.addEventListener("change", e => {
        let nouvelleQuantite = parseInt(e.target.value)
        let nouveauPanier = new Panier()
        nouveauPanier.modifierQuantiteArticle(ligne.idProduit, nouvelleQuantite)
        // pour que la nouvell quantité s'affiche en HTML automatiquement sans avoir à rafraichir la page manuellement, il faut rappeler la totalité du "nouveau" panier
        articlesPanier = recapitulatifPanier.cart()
        calculTotal(articlesPanier)  
    })

    listeArticles.append(article)

}

/*
récupérer le contenu du champ prénom
vérifier si correct (pas de nombre/ pas de caractères spéciaux)
si regex non nul --> ajouter message d'erreur dans id = "firstNameErrorMsg"
Faire çà pour chaque champ en adaptant le regex utilisé 
*/

function verificationPrenom()
{
    let inputPrenom = document.getElementById("firstName")
    let prenom = inputPrenom.value
    let message = document.getElementById("firstNameErrorMsg")
    message.innerText = "Attention, un ou plusieurs caractères ne sont pas acceptés"

    if (prenom.match("[\d|_|\*|&|(|)|=|'|#|~|$|¤|+|{|@|}|€]") != null){
        return message.innerText
    }
}


function verificationNom(){
    let inputNom = document.getElementById("lastName")
    let nom = inputNom.value
    let message = document.getElementById("lastNameErrorMsg")
    message.innerText = "Attention, un ou plusieurs caractères ne sont pas acceptés"

    if (nom.match("[\d|_|\*|&|(|)|=|'|#|~|$|¤|+|{|@|}|€]") != null){
        return message.innerText
    }

}

function verificationAdresse(){
    let inputAdresse = document.getElementById("address")
    let adresse = inputAdresse.value
    let message = document.getElementById("addressErrorMsg")
    message.innerText = "Attention, un ou plusieurs caractères ne sont pas acceptés"

    if (nom.match("[&|(|)|=|'|#|~|$|¤|+|{|@|}|€]") != null){
       return message.innerText
    }
}

function verificationVille(){
    let inputVille = document.getElementById("city")
    let ville = inputVille.value
    let message = document.getElementById("cityErrorMsg")
    message.innerText = "Attention, un ou plusieurs caractères ne sont pas acceptés"

    if (nom.match("[\d|_|\*|&|(|)|=|'|#|~|$|¤|+|{|@|}|€]") != null){
        return message.innerText
    }

}
