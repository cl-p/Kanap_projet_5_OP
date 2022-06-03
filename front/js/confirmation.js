let url = new URL(document.URL)
let numeroDeCommande = url.searchParams.get("numeroDeCommande")

let cardNumeroDeCommande = document.getElementById("orderId")
cardNumeroDeCommande.innerText = numeroDeCommande