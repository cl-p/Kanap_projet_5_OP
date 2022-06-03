
export class Panier {
    ajoutPanier(id, quantite, couleur){
        let produit = {
            idProduit: id,
            quantiteProduit: quantite,
            couleurProduit: couleur
        }
    
       // Récupération d'articles stockés dans localstorage 
       // renvoi le tableau d'objet (propriétés) en format string
        let recuperationPanier = localStorage.getItem("panier");
        // transformation du format string en tableau
        let articles = JSON.parse(recuperationPanier)
        // ajout objet à la fin du tableau
        articles.push(produit)

        // ajout  nouveau tableau (produit) au localstorage
        localStorage.setItem("panier", JSON.stringify(articles))
    }
    // créer nouvelle méthode dans panier sans parametre 
    // elle va récuperer string du localstrorage
    // la transforme en tableau 
    // fonction va retourner la totalité du panier 
    cart(){
        let recupArticles = localStorage.getItem("panier")
        let tousLesArticles = JSON.parse(recupArticles)
        return tousLesArticles;

    }
}
