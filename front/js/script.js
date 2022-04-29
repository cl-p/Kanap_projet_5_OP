
fetch("http://localhost:3000/api/products").then(response => {
   response.json().then(value => {
        value.forEach(canape => {
            creationCard(canape);
        });

   })
}).catch(reason => {
    console.log(reason)
})

// cette fonction va créer tout l'HTML correspondant pour l'accueil
function creationCard(c){
    let parent = document.getElementById("items");
    // créer a 
    let link = document.createElement("a");
    // ajouter attribut href à a 
    link.href = "./product.html?id=" + c._id;
    // créer article comme enfant de a 
    let article = document.createElement("article");
    // créer img enfant de article
    let img = document.createElement("img");
    // Ajouter src à img
    img.src = c.imageUrl;
    // ajouter alt à img
    img.alt = c.altTxt
    // créer h3 
    let h3 = document.createElement("h3");
    // ajouter class à h3
    h3.className = "productName";
    // ajouter texte à h3 
    h3.innerText = c.name;
    //créer p 
    let p = document.createElement("p");
    //ajouter class à p
    p.className = "productDescription";
    // ajouter texte à p
    p.innerText = c.description

    
    link.appendChild(article);
    article.append(img, h3, p);
    parent.appendChild(link);
    
}