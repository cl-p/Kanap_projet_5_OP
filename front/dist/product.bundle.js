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

/***/ "./js/panier.js":
/*!**********************!*\
  !*** ./js/panier.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Panier\": () => (/* binding */ Panier)\n/* harmony export */ });\n\r\nclass Panier {\r\n    ajoutPanier(id, quantite, couleur, image, alt, nom, prix){\r\n        let produit = {\r\n            idProduit: id,\r\n            quantiteProduit: quantite,\r\n            couleurProduit: couleur,\r\n            imageProduit: image,\r\n            altImageProduit: alt,\r\n            nomProduit: nom,\r\n            prixProduit: prix\r\n        }\r\n    \r\n\r\n       // Récupération d'articles stockés dans localstorage \r\n       // renvoi le tableau d'objet (propriétés) en format string\r\n        let recuperationPanier = localStorage.getItem(\"panier\");\r\n        // transformation du format string en tableau\r\n        let articles = JSON.parse(recuperationPanier)\r\n        // création d'un panier : impossible si articles est nul, car récupérationPanier est nul (parce que la clé panier à besoin d'être initialisée)\r\n        if (articles === null){\r\n            // articles devient un tableau, pour pouvoir stocker les objets produits\r\n            articles = []\r\n        }\r\n        // ajout objet à la fin du tableau\r\n        articles.push(produit)\r\n\r\n        // ajout  nouveau tableau (produit) au localstorage\r\n        localStorage.setItem(\"panier\", JSON.stringify(articles))\r\n    }\r\n    // créer nouvelle méthode dans panier sans parametre \r\n    // elle va récuperer string du localstrorage\r\n    // la transforme en tableau \r\n    // fonction va retourner la totalité du panier \r\n    cart(){\r\n        let recupArticles = localStorage.getItem(\"panier\")\r\n        let tousLesArticles = JSON.parse(recupArticles)\r\n        return tousLesArticles;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/panier.js?");

/***/ }),

/***/ "./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panier */ \"./js/panier.js\");\n\r\n\r\n\r\nlet adresseSite = document.URL;\r\nlet url = new URL(adresseSite);\r\nlet idUrl = url.searchParams.get(\"id\");\r\n\r\nfetch(\"http://localhost:3000/api/products/\" + idUrl).then(response => {\r\n    // reponse http et le .then sera exécuté quand API aura répondu\r\n    response.json().then(product => {\r\n            creationProduit(product)\r\n    });\r\n})\r\n\r\n\r\nfunction creationProduit(c){\r\n    // créer img dans div class = item__img\r\n    let parent = document.getElementsByClassName(\"item__img\")[0];\r\n    let img = document.createElement(\"img\");\r\n    // ajouter src (du produit) à img \r\n    img.src = c.imageUrl;\r\n    // ajouter alt (du produit) à img \r\n    img.alt = c.altTxt;\r\n    // ajouter titre text (nom du produit) à id= title \r\n    let titreProduit = document.getElementById(\"title\");\r\n    titreProduit.innerText = c.name; \r\n    // ajouter prix (du produit) à id = price\r\n    let prixProduit = document.getElementById(\"price\");\r\n    prixProduit.innerText = c.price;\r\n    // ajouter description à id = description\r\n    let descriptionProduit = document.getElementById(\"description\");\r\n    descriptionProduit.innerText = c.description;\r\n    let select = document.getElementById(\"colors\");\r\n\r\n    c.colors.forEach(color => {\r\n        // créer option à id = colors\r\n        let option = document.createElement(\"option\");\r\n        // ajouter value \"vert\" à option \r\n        option.setAttribute(\"value\", color);\r\n        option.innerText = color;\r\n        select.appendChild(option);\r\n    });\r\n    parent.appendChild(img);\r\n\r\n    // ajout d'un produit dans le panier\r\n    let button = document.getElementById(\"addToCart\");\r\n    button.onclick = () => {\r\n        ajout(c)\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfunction ajout(produit){\r\n    console.log(produit)\r\n    let choixColor = document.getElementById(\"colors\");\r\n    let color = choixColor.value;\r\n    \r\n    let nombreArticle = document.getElementById(\"quantity\");\r\n    let quantiteArticle = nombreArticle.value;\r\n\r\n    // instancier une classe + création d'un panier\r\n    let monPanier = new _panier__WEBPACK_IMPORTED_MODULE_0__.Panier();\r\n    monPanier.ajoutPanier(idUrl, quantiteArticle, color, produit.imageUrl, produit.altTxt, produit.name, produit.price)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://kanap-front-end/./js/product.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/product.js");
/******/ 	
/******/ })()
;