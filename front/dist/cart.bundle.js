/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panier */ \"./js/panier.js\");\n\r\n\r\n// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher\r\nlet recapitulatifPanier = new _panier__WEBPACK_IMPORTED_MODULE_0__.Panier();\r\nlet articlesPanier = recapitulatifPanier.cart()\r\nfunction supprimerArticle(article){\r\n    recapitulatifPanier.deleteItem(article)\r\n    // utiliser querySelector permet de sélectionner l'article précis que l'on souhaite supprimer \r\n    let articleASupprimer = document.querySelector('[data-id=\"'+article.idProduit+'\"]')\r\n    // la fonction remove permet de supprimer l'article de la partie visible du panier par l'utilisateur\r\n    articleASupprimer.remove()\r\n}\r\n\r\narticlesPanier.forEach(element => {\r\n    creationLignePanier(element)\r\n});\r\n\r\n\r\ncalculTotal(articlesPanier)\r\n\r\n\r\nfunction calculTotal (articles){\r\n    // le paramètre articles = tableau d'objets \r\n    let total = 0\r\n    let totalQuantiteCanape = 0\r\n    articles.forEach(element => {\r\n        let totalPourUneLigne = parseInt(element.quantiteProduit) * parseInt(element.prixProduit)\r\n        total = total + totalPourUneLigne\r\n        let totalQuantiteCanapePourUneLigne = parseInt(element.quantiteProduit)\r\n        totalQuantiteCanape = totalQuantiteCanape + totalQuantiteCanapePourUneLigne\r\n    });\r\n\r\n\r\n    // ajouter nb d'articles total du panier dans id = \"totalQuantity\"\r\n    let afficherQuantiteCanape = document.getElementById(\"totalQuantity\")\r\n    afficherQuantiteCanape.innerText = totalQuantiteCanape\r\n\r\n\r\n\r\n    // ajouter prix total du panier dans id = \"totalPrice\"\r\n    let afficherTotalPanier = document.getElementById(\"totalPrice\")\r\n    afficherTotalPanier.innerText = total\r\n}\r\n\r\nfunction creationLignePanier(ligne){\r\n\r\n    // créer article\r\n    let listeArticles = document.getElementById(\"cart__items\")\r\n    let article = document.createElement(\"article\")\r\n    // ajouter class\r\n    article.classList.add(\"cart__item\")\r\n    // ajouter id du produit\r\n    article.dataset.id = ligne.idProduit\r\n    // ajouter color du produit\r\n    article.dataset.color = ligne.couleurProduit\r\n\r\n\r\n    // créer div enfant de article \r\n\r\n    article.innerHTML = `\r\n        <div class=\"cart__item__img\">\r\n            <img src=${ligne.imageProduit} alt=${ligne.altImageProduit}>\r\n        </div>\r\n        <div class=\"cart__item__content\">\r\n            <div class=\"cart__item__content__description\">\r\n                <h2>${ligne.nomProduit} </h2>\r\n                <p> ${ligne.couleurProduit} </p>\r\n                <p> ${ligne.prixProduit} €</p>\r\n            </div>\r\n            <div class=\"cart__item__content__settings\">\r\n                <div class=\"cart__item__content__settings__quantity\">\r\n                    <p>Qté : </p>\r\n                    <input type=\"number\" class=\"itemQuantity\" name=\"itemQuantity\" min=\"1\" max=\"100\" value=\"${ligne.quantiteProduit}\">\r\n                </div>\r\n                <div class=\"cart__item__content__settings__delete\">\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n    let supprimerLigne = article.getElementsByClassName(\"cart__item__content__settings__delete\")[0]\r\n    // <p class=\"deleteItem\" onclick=\"supprimerArticle(${ligne.idProduit},${ligne.couleurProduit})\">Supprimer</p>\r\n    let paragraphe = document.createElement(\"p\")\r\n    paragraphe.classList.add(\"deleteItem\")\r\n    paragraphe.onclick = () => supprimerArticle(ligne)\r\n    paragraphe.innerText = \"Supprimer\"\r\n    supprimerLigne.appendChild(paragraphe)\r\n\r\n    let inputQuantite = article.getElementsByClassName(\"itemQuantity\")[0]\r\n    inputQuantite.addEventListener(\"change\", e => {\r\n        let nouvelleQuantite = parseInt(e.target.value)\r\n        let nouveauPanier = new _panier__WEBPACK_IMPORTED_MODULE_0__.Panier()\r\n        nouveauPanier.modifierQuantiteArticle(ligne.idProduit, nouvelleQuantite)\r\n        // pour que la nouvell quantité s'affiche en HTML automatiquement sans avoir à rafraichir la page manuellement, il faut rappeler la totalité du \"nouveau\" panier\r\n        articlesPanier = recapitulatifPanier.cart()\r\n        calculTotal(articlesPanier)  \r\n    })\r\n\r\n    listeArticles.append(article)\r\n\r\n}\r\n\r\n\r\nfunction passerCommande(){\r\n    // récuperer les valeurs des inputs\r\n\r\n    let inputPrenom = document.getElementById(\"firstName\")\r\n    let prenom = inputPrenom.value\r\n    let inputNom = document.getElementById(\"lastName\")\r\n    let nom = inputNom.value\r\n    let inputAdresse = document.getElementById(\"address\")\r\n    let adresse = inputAdresse.value\r\n    let inputVille = document.getElementById(\"city\")\r\n    let ville = inputVille.value\r\n    let inputEmail = document.getElementById(\"email\")\r\n    let email = inputEmail.value\r\n\r\n    // vérifier s'ils sont corrects\r\n\r\n    if (prenom.match(\"[\\\\d_\\\\*&='#~$¤{@}€]\") != null || prenom === \"\"){\r\n        alert(\"Attention, un ou plusieurs caractères ne sont pas acceptés\")\r\n        return\r\n    }\r\n\r\n    if (nom.match(\"[\\\\d_\\\\*&='#~$¤{@}€]\") != null || nom === \"\"){\r\n        alert(\"Attention, un ou plusieurs caractères ne sont pas acceptés\")\r\n        return\r\n    }\r\n\r\n    if (adresse.match(\"[_\\\\*&='#~$¤{@}€]\") != null || adresse === \"\"){\r\n        alert(\"Attention, un ou plusieurs caractères ne sont pas acceptés\")\r\n        return\r\n    }\r\n\r\n    if (ville.match(\"[\\\\d_\\\\*&='#~$¤{@}€]\") != null || ville === \"\"){\r\n        alert(\"Attention, un ou plusieurs caractères ne sont pas acceptés\")\r\n        return\r\n    }\r\n\r\n    if (email.match(\".*@.*\\\\..*\") === null || email === \"\"){\r\n        alert(\"Attention, il manque le @ ou le .fr ou le .com à votre adresse mail\")\r\n        return\r\n    }\r\n\r\n\r\n    // envoyer les informations à l'API \r\n    let idProduits = []\r\n    articlesPanier.forEach(element => {\r\n        idProduits.push(element.idProduit)\r\n    });\r\n\r\n\r\n\r\n    let donnees = {\r\n        contact : {\r\n            firstName : prenom, \r\n            lastName : nom,\r\n            address : adresse,\r\n            city : ville,\r\n            email : email\r\n        },\r\n        products : idProduits\r\n    }\r\n\r\n    fetch(\"http://localhost:3000/api/products/order\", {\r\n        method : \"POST\", \r\n        // il faut spécifier le type d'objet\r\n        headers : {\r\n            \"Content-Type\" : \"application/json\"\r\n        },\r\n        body : JSON.stringify(donnees)\r\n    }).then( response => {\r\n        response.json().then( donneesJson =>{\r\n            console.log(donneesJson.orderId)\r\n            // il faut rediriger les clients sur la page de confirmation de la commande\r\n            location.assign(\"/front/html/confirmation.html?numeroDeCommande=\" + donneesJson.orderId)\r\n        })\r\n    })\r\n\r\n}\r\n\r\nlet boutonCommander = document.getElementById(\"order\")\r\nboutonCommander.onclick = e => {\r\n    // annule le type \"submit\"par defaut du bouton commander\r\n    e.preventDefault()\r\n    passerCommande()\r\n}\r\n\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/cart.js?");

/***/ }),

/***/ "./js/panier.js":
/*!**********************!*\
  !*** ./js/panier.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Panier\": () => (/* binding */ Panier)\n/* harmony export */ });\n\r\nclass Panier {\r\n    ajoutPanier(id, quantite, couleur, image, alt, nom, prix){\r\n        let produit = {\r\n            idProduit: id,\r\n            quantiteProduit: quantite,\r\n            couleurProduit: couleur,\r\n            imageProduit: image,\r\n            altImageProduit: alt,\r\n            nomProduit: nom,\r\n            prixProduit: prix\r\n        }\r\n    \r\n\r\n       // Récupération d'articles stockés dans localstorage \r\n       // renvoi le tableau d'objet (propriétés) en format string\r\n        let recuperationPanier = localStorage.getItem(\"panier\");\r\n        // transformation du format string en tableau\r\n        let articles = JSON.parse(recuperationPanier)\r\n        // création d'un panier : impossible si articles est nul, car récupérationPanier est nul (parce que la clé panier à besoin d'être initialisée)\r\n        if (articles === null){\r\n            // articles devient un tableau, pour pouvoir stocker les objets produits\r\n            articles = []\r\n        }\r\n        // Condition lors ajout du produit \r\n\r\n        // On part du principe que le produit qu'on veut ajouter est unique\r\n        let produitUnique = true\r\n\r\n        // on veut vérifier chaque élément du tableau articles pour comparer les id \r\n        // Si plusieurs elements ont le même id, ne pas push un nouvel article au localstorage \r\n        articles.forEach(element => {\r\n            if (element.idProduit === produit.idProduit && element.couleurProduit === produit.couleurProduit){\r\n                element.quantiteProduit = parseInt(element.quantiteProduit) + parseInt(produit.quantiteProduit)\r\n                // lorsque le produit que l'on cherche à ajouter passe dans la condition if, alors la porte du localstorage se ferme\r\n                produitUnique = false\r\n            } \r\n        });\r\n       // ajout objet à la fin du tableau SEULEMENT si l'id est UNIQUE\r\n       if (produitUnique === true) {\r\n\r\n           articles.push(produit)\r\n       }\r\n       \r\n        // ajout  nouveau tableau (produit) au localstorage\r\n        localStorage.setItem(\"panier\", JSON.stringify(articles))\r\n    }\r\n    // créer nouvelle méthode dans panier sans parametre \r\n    // elle va récuperer string du localstrorage\r\n    // la transforme en tableau \r\n    // fonction va retourner la totalité du panier \r\n    cart(){\r\n        let recupArticles = localStorage.getItem(\"panier\")\r\n        let tousLesArticles = JSON.parse(recupArticles)\r\n        return tousLesArticles;\r\n    }\r\n\r\n    deleteItem(elementDuPanier) {\r\n     \r\n        let recupArticles = JSON.parse(localStorage.getItem(\"panier\"))\r\n      \r\n        // on cherche la position de l'article que l'on cherche\r\n        let indexArticle = recupArticles.findIndex(p =>{\r\n            // cette ligne en dessous peut être vu comme un booléen (true/false)\r\n            // pour que IndexArticle puisse fonctionner, il faut que la fonctionne retourne une réponse\r\n            return (\r\n                p.idProduit === elementDuPanier.idProduit && \r\n                p.couleurProduit === elementDuPanier.couleurProduit\r\n            )\r\n        })\r\n        console.log(indexArticle)\r\n        if (indexArticle != -1){\r\n            // fonction splice permet de supprimer l'élément d'un tableau, il prend 2 paramètres : la position de départ et le nombre d'élément à supprimer après la position indiquée\r\n            recupArticles.splice(indexArticle, 1)\r\n        }\r\n        \r\n        localStorage.setItem(\"panier\", JSON.stringify(recupArticles))\r\n        \r\n    }\r\n\r\n    modifierQuantiteArticle(id, newQuantite){\r\n        let recupArticles = JSON.parse(localStorage.getItem(\"panier\"))\r\n        // on doit déjà localiser l'objet avant de pouvoir quoi que ce soit \r\n        let produitAModifier = recupArticles.find(p => {\r\n                return p.idProduit === id\r\n        })\r\n        produitAModifier.quantiteProduit = newQuantite\r\n    \r\n        /* on veut savoir à quel endroit on se trouve \r\n        pour savoir que c'est sur tel élément qu'on veut appliquer un changement \r\n        on veut que si l'utilisateur change la quantité, çà renvoie au localstorage la nouvelle quantité\r\n        */\r\n\r\n        localStorage.setItem(\"panier\", JSON.stringify(recupArticles))\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/panier.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/cart.js");
/******/ 	
/******/ })()
;