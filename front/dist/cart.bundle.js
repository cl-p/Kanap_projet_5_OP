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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panier */ \"./js/panier.js\");\n\r\n\r\n// il faut faire un nouveau panier pour pouvoir prendre les infos de la classe panier et les afficher\r\nlet recapitulatifPanier = new _panier__WEBPACK_IMPORTED_MODULE_0__.Panier();\r\nlet articlesPanier = recapitulatifPanier.cart()\r\nlet total = 0\r\nlet totalQuantiteCanape = 0\r\n\r\narticlesPanier.forEach(element => {\r\n    creationLignePanier(element)\r\n    let totalPourUneLigne = parseInt(element.quantiteProduit) * parseInt(element.prixProduit)\r\n    total = total + totalPourUneLigne\r\n    let totalQuantiteCanapePourUneLigne = parseInt(element.quantiteProduit)\r\n    totalQuantiteCanape = totalQuantiteCanape + totalQuantiteCanapePourUneLigne\r\n});\r\n\r\n\r\nfunction creationLignePanier(ligne){\r\n\r\n    // créer article\r\n    let listeArticles = document.getElementById(\"cart__items\")\r\n    let article = document.createElement(\"article\")\r\n    // ajouter class\r\n    article.classList.add(\"cart__item\")\r\n    // ajouter id du produit\r\n    article.dataset.id = ligne.idProduit\r\n    // ajouter color du produit\r\n    article.dataset.color = ligne.couleurProduit\r\n\r\n\r\n    // créer div enfant de article \r\n\r\n    article.innerHTML = `\r\n        <div class=\"cart__item__img\">\r\n            <img src=${ligne.imageProduit} alt=${ligne.altImageProduit}>\r\n        </div>\r\n        <div class=\"cart__item__content\">\r\n            <div class=\"cart__item__content__description\">\r\n                <h2>${ligne.nomProduit} </h2>\r\n                <p> ${ligne.couleurProduit} </p>\r\n                <p> ${ligne.prixProduit} €</p>\r\n            </div>\r\n            <div class=\"cart__item__content__settings\">\r\n                <div class=\"cart__item__content__settings__quantity\">\r\n                    <p>Qté : </p>\r\n                    <input type=\"number\" class=\"itemQuantity\" name=\"itemQuantity\" min=\"1\" max=\"100\" value=\"${ligne.quantiteProduit}\">\r\n                </div>\r\n                <div class=\"cart__item__content__settings__delete\">\r\n                    <p class=\"deleteItem\">Supprimer</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n\r\n\r\n\r\n    listeArticles.append(article)\r\n}\r\n\r\n\r\n// ajouter nb d'articles total du panier dans id = \"totalQuantity\"\r\nlet afficherQuantiteCanape = document.getElementById(\"totalQuantity\")\r\nafficherQuantiteCanape.innerText = totalQuantiteCanape\r\n\r\n\r\n\r\n// ajouter prix total du panier dans id = \"totalPrice\"\r\nlet afficherTotalPanier = document.getElementById(\"totalPrice\")\r\nafficherTotalPanier.innerText = total\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ajouter message d'erreur dans id = \"firstNameErrorMsg\"\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/cart.js?");

/***/ }),

/***/ "./js/panier.js":
/*!**********************!*\
  !*** ./js/panier.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Panier\": () => (/* binding */ Panier)\n/* harmony export */ });\n\r\nclass Panier {\r\n    ajoutPanier(id, quantite, couleur, image, alt, nom, prix){\r\n        let produit = {\r\n            idProduit: id,\r\n            quantiteProduit: quantite,\r\n            couleurProduit: couleur,\r\n            imageProduit: image,\r\n            altImageProduit: alt,\r\n            nomProduit: nom,\r\n            prixProduit: prix\r\n        }\r\n    \r\n\r\n       // Récupération d'articles stockés dans localstorage \r\n       // renvoi le tableau d'objet (propriétés) en format string\r\n        let recuperationPanier = localStorage.getItem(\"panier\");\r\n        // transformation du format string en tableau\r\n        let articles = JSON.parse(recuperationPanier)\r\n        // création d'un panier : impossible si articles est nul, car récupérationPanier est nul (parce que la clé panier à besoin d'être initialisée)\r\n        if (articles === null){\r\n            // articles devient un tableau, pour pouvoir stocker les objets produits\r\n            articles = []\r\n        }\r\n\r\n\r\n        // Condition lors ajout du produit \r\n\r\n        // On part du principe que le produit qu'on veut ajouter est unique\r\n        let produitUnique = true\r\n\r\n        // on veut vérifier chaque élément du tableau articles pour comparer les id \r\n        articles.forEach(element => {\r\n            if (element.idProduit === produit.idProduit && element.couleurProduit === produit.couleurProduit){\r\n                element.quantiteProduit = parseInt(element.quantiteProduit) + parseInt(produit.quantiteProduit)\r\n                // lorsque le produit que l'on cherche à ajouter passe dans la condition if, alors la porte du localstorage se ferme\r\n                produitUnique = false\r\n            } \r\n        });\r\n        \r\n        /* \r\n        \r\n        \r\n        Si plusieurs elements ont le même id, ne pas push un nouvel article au localstorage \r\n        \r\n        \r\n        */\r\n       \r\n       \r\n       \r\n       // ajout objet à la fin du tableau SEULEMENT si l'id est UNIQUE\r\n       if (produitUnique === true) {\r\n\r\n           articles.push(produit)\r\n\r\n       }\r\n       \r\n        // ajout  nouveau tableau (produit) au localstorage\r\n        localStorage.setItem(\"panier\", JSON.stringify(articles))\r\n    }\r\n    // créer nouvelle méthode dans panier sans parametre \r\n    // elle va récuperer string du localstrorage\r\n    // la transforme en tableau \r\n    // fonction va retourner la totalité du panier \r\n    cart(){\r\n        let recupArticles = localStorage.getItem(\"panier\")\r\n        let tousLesArticles = JSON.parse(recupArticles)\r\n        return tousLesArticles;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/panier.js?");

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