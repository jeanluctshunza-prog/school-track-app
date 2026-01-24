let panier = [];
let totalGlobal = 0;

function ajouterProduitComplet(nomBase, idTaille, idCouleur) {
    const selectTaille = document.getElementById(idTaille);
    const infoTaille = selectTaille.value.split('|'); 
    
    const tailleChoisie = infoTaille[0];
    const prixChoisi = parseInt(infoTaille[1]);
    const couleurChoisie = document.getElementById(idCouleur).value || "Non précisée";

    const item = {
        nom: `${nomBase} (${tailleChoisie})`,
        couleur: couleurChoisie,
        prix: prixChoisi
    };
    
    panier.push(item);
    totalGlobal += prixChoisi;
    
    document.getElementById('count').innerText = panier.length;
    document.getElementById('total').innerText = totalGlobal + " $";
    
    alert("Ajouté : " + item.nom);
}

function envoyerWhatsApp() {
    if (panier.length === 0) return alert("Votre panier est vide");

    const numero = "243840847260";
    let message = "*COMMANDE NEK HAIR & BEAUTY*\n\n";
    
    panier.forEach(item => {
        message += `✅ ${item.nom}\n🎨 Couleur: ${item.couleur}\n💰 Prix: ${item.prix}$\n\n`;
    });

    message += `*TOTAL À PAYER : ${totalGlobal}$*\n\n📍 Livraison : Kinshasa`;
    
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(message)}`);
}
