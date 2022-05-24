
export class Panier {
    ajoutPanier(id, quantite, couleur, image, alt, nom){
        let produit = {
            idProduit: id,
            quantiteProduit: quantite,
            couleurProduit: couleur,
            imageProduit: image,
            altImageProduit: alt,
            nomProduit: nom,
            
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
        // Si plusieurs elements ont le même id, ne pas push un nouvel article au localstorage 
        articles.forEach(element => {
            if (element.idProduit === produit.idProduit && element.couleurProduit === produit.couleurProduit){
                element.quantiteProduit = parseInt(element.quantiteProduit) + parseInt(produit.quantiteProduit)
                // lorsque le produit que l'on cherche à ajouter passe dans la condition if, alors la porte du localstorage se ferme
                produitUnique = false
            } 
        });
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

    deleteItem(elementDuPanier) {
     
        let recupArticles = JSON.parse(localStorage.getItem("panier"))
      
        // on cherche la position de l'article que l'on cherche
        let indexArticle = recupArticles.findIndex(p =>{
            // cette ligne en dessous peut être vu comme un booléen (true/false)
            // pour que IndexArticle puisse fonctionner, il faut que la fonctionne retourne une réponse
            return (
                p.idProduit === elementDuPanier.idProduit && 
                p.couleurProduit === elementDuPanier.couleurProduit
            )
        })
        console.log(indexArticle)
        if (indexArticle != -1){
            // fonction splice permet de supprimer l'élément d'un tableau, il prend 2 paramètres : la position de départ et le nombre d'élément à supprimer après la position indiquée
            recupArticles.splice(indexArticle, 1)
        }
        
        localStorage.setItem("panier", JSON.stringify(recupArticles))
        
    }

    modifierQuantiteArticle(id, newQuantite){
        let recupArticles = JSON.parse(localStorage.getItem("panier"))
        // on doit déjà localiser l'objet avant de pouvoir quoi que ce soit 
        let produitAModifier = recupArticles.find(p => {
                return p.idProduit === id
        })
        produitAModifier.quantiteProduit = newQuantite
    
        /* on veut savoir à quel endroit on se trouve 
        pour savoir que c'est sur tel élément qu'on veut appliquer un changement 
        on veut que si l'utilisateur change la quantité, çà renvoie au localstorage la nouvelle quantité
        */

        localStorage.setItem("panier", JSON.stringify(recupArticles))
    }

}


