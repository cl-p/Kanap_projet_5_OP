
export class Panier {
    ajoutPanier(id, quantite, couleur, image, alt, nom, prix){
        let produit = {
            idProduit: id,
            quantiteProduit: quantite,
            couleurProduit: couleur,
            imageProduit: image,
            altImageProduit: alt,
            nomProduit: nom,
            prixProduit: prix
        }
    

       // Récupération d'articles stockés dans localstorage 
       // renvoi le tableau d'objet (propriétés) en format string
        let recuperationPanier = localStorage.getItem("panier");
        // transformation du format string en tableau
        let articles = JSON.parse(recuperationPanier)
        // création d'un panier : impossible si articles est nul, car récupérationPanier est nul (parce que la clé panier à besoin d'être initialisée)
        if (articles === null){
            // articles devient un tableau, pour pouvoir stocker les objets produits
            articles = []
        }


        // Condition lors ajout du produit 

        // On part du principe que le produit qu'on veut ajouter est unique
        let produitUnique = true

        // on veut vérifier chaque élément du tableau articles pour comparer les id 
        articles.forEach(element => {
            if (element.idProduit === produit.idProduit && element.couleurProduit === produit.couleurProduit){
                element.quantiteProduit = parseInt(element.quantiteProduit) + parseInt(produit.quantiteProduit)
                // lorsque le produit que l'on cherche à ajouter passe dans la condition if, alors la porte du localstorage se ferme
                produitUnique = false
            } 
        });
        
        /* 
        
        
        Si plusieurs elements ont le même id, ne pas push un nouvel article au localstorage 
        
        
        */
       
       
       
       // ajout objet à la fin du tableau SEULEMENT si l'id est UNIQUE
       if (produitUnique === true) {

           articles.push(produit)

       }
       
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
