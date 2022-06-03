/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("\r\nfetch(\"http://localhost:3000/api/products\").then(response => {\r\n   response.json().then(value => {\r\n        value.forEach(canape => {\r\n            creationCard(canape);\r\n        });\r\n\r\n   })\r\n}).catch(reason => {\r\n    console.log(reason)\r\n})\r\n\r\n// cette fonction va créer tout l'HTML correspondant pour l'accueil\r\nfunction creationCard(c){\r\n    let parent = document.getElementById(\"items\");\r\n    // créer a \r\n    let link = document.createElement(\"a\");\r\n    // ajouter attribut href à a \r\n    link.href = \"./product.html?id=\" + c._id;\r\n    // créer article comme enfant de a \r\n    let article = document.createElement(\"article\");\r\n    // créer img enfant de article\r\n    let img = document.createElement(\"img\");\r\n    // Ajouter src à img\r\n    img.src = c.imageUrl;\r\n    // ajouter alt à img\r\n    img.alt = c.altTxt\r\n    // créer h3 \r\n    let h3 = document.createElement(\"h3\");\r\n    // ajouter class à h3\r\n    h3.className = \"productName\";\r\n    // ajouter texte à h3 \r\n    h3.innerText = c.name;\r\n    //créer p \r\n    let p = document.createElement(\"p\");\r\n    //ajouter class à p\r\n    p.className = \"productDescription\";\r\n    // ajouter texte à p\r\n    p.innerText = c.description\r\n\r\n    \r\n    link.appendChild(article);\r\n    article.append(img, h3, p);\r\n    parent.appendChild(link);\r\n    \r\n}\n\n//# sourceURL=webpack://kanap-front-end/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;