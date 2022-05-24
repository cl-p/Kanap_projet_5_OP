import { Panier } from "./panier";

// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher
let recapitulatifPanier = new Panier();
let articlesPanier = []
affichagePanier()


function supprimerArticle(article){
    recapitulatifPanier.deleteItem(article)
    // utiliser querySelector permet de sélectionner l'article précis que l'on souhaite supprimer 
    let articleASupprimer = document.querySelector('[data-id="'+article.idProduit+'"]')
    // la fonction remove permet de supprimer l'article de la partie visible du panier par l'utilisateur
    articleASupprimer.remove()
    affichagePanier()
}



function affichagePanier(){

    let listeArticles = document.getElementById("cart__items")
    listeArticles.innerHTML = ""
    document.getElementById("totalPrice").innerHTML = ""
    document.getElementById("totalQuantity").innerHTML = ""

    articlesPanier = recapitulatifPanier.cart()

    if (articlesPanier.length === 0){
        document.getElementById("cartAndFormContainer").innerHTML = `
        <a href="/front/html" style="text-decoration: none">
            <h1 style="text-align: center">
                Votre panier est vide ! <br>
                Pour trouver le canapé de vos rêves, c'est par ici !
            </h1>
        </a>
        `

    }

    articlesPanier.forEach(element => {
// il ne faut pas stocker le prix dans le localStorage, donc on fait appel à l'API pour qu'elle nous fournisse le prix de chaque canapé dans le panier
    fetch("http://localhost:3000/api/products/" + element.idProduit).then( response => {
        response.json().then(p =>{
            element.prix = p.price
            creationLignePanier(element)


            // gestion du prix total du panier
            let afficherTotalPanier = document.getElementById("totalPrice")
            let totalActuel = parseInt(afficherTotalPanier.innerText)
            // si totalActuel n'est pas un nombre, on veut que çà le soit
            if (isNaN(totalActuel)){
                totalActuel = 0
            }
            totalActuel = totalActuel + (element.quantiteProduit * element.prix)
            afficherTotalPanier.innerText = totalActuel
            

            // gestion de la quantité totale du panier
            let afficherQuantiteCanape = document.getElementById("totalQuantity")
            let totalQuantite = parseInt(afficherQuantiteCanape.innerText)
            if (isNaN(totalQuantite)){
                totalQuantite = 0
            }
            totalQuantite = totalQuantite + parseInt(element.quantiteProduit)
            afficherQuantiteCanape.innerText = totalQuantite
        })
    })  
});
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
                <p> ${ligne.prix} €</p>
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
        affichagePanier() 
    })

    listeArticles.append(article)

}


function passerCommande(){
    // récuperer les valeurs des inputs

    let inputPrenom = document.getElementById("firstName")
    let prenom = inputPrenom.value
    let inputNom = document.getElementById("lastName")
    let nom = inputNom.value
    let inputAdresse = document.getElementById("address")
    let adresse = inputAdresse.value
    let inputVille = document.getElementById("city")
    let ville = inputVille.value
    let inputEmail = document.getElementById("email")
    let email = inputEmail.value

    // vérifier s'ils sont corrects

    if (prenom.match("[\\d_\\*&='#~$¤{@}€]") != null || prenom === ""){
        alert("Attention, un ou plusieurs caractères ne sont pas acceptés dans le champ prénom")
        return
    }

    if (nom.match("[\\d_\\*&='#~$¤{@}€]") != null || nom === ""){
        alert("Attention, un ou plusieurs caractères ne sont pas acceptés dans le champ nom")
        return
    }

    if (adresse.match("[_\\*&='#~$¤{@}€]") != null || adresse === ""){
        alert("Attention, un ou plusieurs caractères ne sont pas acceptés dans le champ adresse")
        return
    }

    if (ville.match("[\\d_\\*&='#~$¤{@}€]") != null || ville === ""){
        alert("Attention, un ou plusieurs caractères ne sont pas acceptés dans le champ ville")
        return
    }

    if (email.match(".*@.*\\..*") === null || email === ""){
        alert("Attention, il manque le @ ou le .fr ou le .com à votre adresse mail")
        return
    }


    // envoyer les informations à l'API 
    let idProduits = []
    articlesPanier.forEach(element => {
        idProduits.push(element.idProduit)
    });



    let donnees = {
        contact : {
            firstName : prenom, 
            lastName : nom,
            address : adresse,
            city : ville,
            email : email
        },
        products : idProduits
    }

    fetch("http://localhost:3000/api/products/order", {
        method : "POST", 
        // il faut spécifier le type d'objet
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(donnees)
    }).then( response => {
        response.json().then( donneesJson =>{
            console.log(donneesJson.orderId)
            // il faut rediriger les clients sur la page de confirmation de la commande
            location.assign("/front/html/confirmation.html?numeroDeCommande=" + donneesJson.orderId)
        })
    })

}

let boutonCommander = document.getElementById("order")
boutonCommander.onclick = e => {
    // annule le type "submit"par defaut du bouton commander
    e.preventDefault()
    passerCommande()
}

