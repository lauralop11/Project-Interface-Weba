function produireFacture()
{
    let monStockage = sessionStorage;

    if(Number(monStockage.getItem("qteRose")) > 0)
    {
        afficheProduitRose();
    }

    if(Number(monStockage.getItem("qteTulipe")) > 0)
    {
        afficheProduitTulipe();
    }
    if(Number(monStockage.getItem("qteBouquet")) > 0)
    {
        afficheProduitBouquet();
    }
    if(Number(monStockage.getItem("qteExt")) > 0)
    {
        afficheProduitExt();
    }
}

/*Création du contenu pour la page fleuriste, produit Roses*/
function afficheProduitRose()
{
    let monStockage = sessionStorage;

    /*Création de la rangée du grid*/
    let divRangee = document.createElement("div");
    divRangee.setAttribute("class", "row m-3");
    divRangee.setAttribute("id", "divProduitRose");

    /*Création des colonnes du grid*/
    let divColUn = document.createElement("div");
    divColUn.setAttribute("class", "col");
    let divColDeux = document.createElement("div");
    divColDeux.setAttribute("class", "col");
    let divColTrois = document.createElement("div");
    divColTrois.setAttribute("class", "col-2");
    let divColQuatre = document.createElement("div");
    divColQuatre.setAttribute("class", "col-2");
    let divColCinq = document.createElement("div");
    divColCinq.setAttribute("class", "col-2");

    /**** Colonne 1 : image du produit
     *    Colonne 2 : titre et description du produit
     *    Colonne 3 : quantité désirée
     *    Colonne 4 : option de taille
     *    Colonne 5 : option de complement */

    let imgColUn = document.createElement("img");
    imgColUn.setAttribute("src", "img/bouquet2.jpeg");
    imgColUn.setAttribute("class", "img-fluid");
    imgColUn.setAttribute("width", "250");
    imgColUn.setAttribute("alt", "Bouquet roses");
    divColUn.appendChild(imgColUn);

    let titreColDeux = document.createElement("h2");
    titreColDeux.innerText = "Bouquet roses";
    let descColDeux = document.createElement("p");
    descColDeux.innerText = "Belle bouquet avec les plus belles roses du la session";
    divColDeux.appendChild(titreColDeux);
    divColDeux.appendChild(descColDeux);

    divColTrois.innerText = "Qté : " + monStockage.getItem("qteRose");
    divColQuatre.innerText = "Taille: " + monStockage.getItem("tailleRose");
    divColCinq.innerText = "Complement: " + monStockage.getItem("complementRose");
    

    /*Cacher le titre Panier vide*/
    document.getElementById("titrePanierVide").classList.add("d-none");
    /*Afficher le bouton pour vider le panier*/
    document.getElementById("boutonEffacer").classList.remove("d-none");

    /*Afficher la nouvelle div dans le container*/
    divRangee.appendChild(divColUn);
    divRangee.appendChild(divColDeux);
    divRangee.appendChild(divColTrois);
    divRangee.appendChild(divColQuatre);
    divRangee.appendChild(divColCinq);
    document.getElementById("panier").appendChild(divRangee);


    /*Afficher le bouton pour commander*/
    document.getElementById("boutonCommander").classList.remove("d-none");
}
/*Création du contenu pour la page fleuriste, produit Tulipe*/
function afficheProduitTulipe()
{
    let monStockage = sessionStorage;

    /*Création de la rangée du grid*/
    let divRangee = document.createElement("div");
    divRangee.setAttribute("class", "row m-3");
    divRangee.setAttribute("id", "divProduitTulipe");

    /*Création des colonnes du grid*/
    let divColUn = document.createElement("div");
    divColUn.setAttribute("class", "col");
    let divColDeux = document.createElement("div");
    divColDeux.setAttribute("class", "col");
    let divColTrois = document.createElement("div");
    divColTrois.setAttribute("class", "col-2");
    let divColQuatre = document.createElement("div");
    divColQuatre.setAttribute("class", "col-2");
    let divColCinq = document.createElement("div");
    divColCinq.setAttribute("class", "col-2");

     /**** Colonne 1 : image du produit
     *    Colonne 2 : titre et description du produit
     *    Colonne 3 : quantité désirée
     *    Colonne 4 : option de taille
     *    Colonne 5 : option de complement */

    let imgColUn = document.createElement("img");
    imgColUn.setAttribute("src", "img/bouquet3.jpeg");
    imgColUn.setAttribute("class", "img-fluid");
    imgColUn.setAttribute("width", "250");
    imgColUn.setAttribute("alt", "Bouquet Tulipe");
    divColUn.appendChild(imgColUn);

    let titreColDeux = document.createElement("h2");
    titreColDeux.innerText = "Bouquet de tulipes";
    let descColDeux = document.createElement("p");
    descColDeux.innerText = "Belle bouquet avec les plus belles tulipes du la session.";
    divColDeux.appendChild(titreColDeux);
    divColDeux.appendChild(descColDeux);

    divColTrois.innerText = "Qté : " + monStockage.getItem("qteTulipe");
    divColQuatre.innerText = "Taille: " + monStockage.getItem("tailleTulipe");
    divColCinq.innerText = "Complement: " + monStockage.getItem("complemenTulipe");
    

    /*Cacher le titre Panier vide*/
    document.getElementById("titrePanierVide").classList.add("d-none");
    /*Afficher le bouton pour vider le panier*/
    document.getElementById("boutonEffacer").classList.remove("d-none");

    /*Afficher la nouvelle div dans le container*/
    divRangee.appendChild(divColUn);
    divRangee.appendChild(divColDeux);
    divRangee.appendChild(divColTrois);
    divRangee.appendChild(divColQuatre);
    divRangee.appendChild(divColCinq);
    document.getElementById("panier").appendChild(divRangee);

    /*Afficher le bouton pour commander*/
    document.getElementById("boutonCommander").classList.remove("d-none");
}

/*Création du contenu pour la page decoration, produit Bouquet*/
function afficheProduitBouquet()
{
    let monStockage = sessionStorage;

    /*Création de la rangée du grid*/
    let divRangee = document.createElement("div");
    divRangee.setAttribute("class", "row m-3");
    divRangee.setAttribute("id", "divProduitBouquet");

    /*Création des colonnes du grid*/
    let divColUn = document.createElement("div");
    divColUn.setAttribute("class", "col");
    let divColDeux = document.createElement("div");
    divColDeux.setAttribute("class", "col");
    let divColTrois = document.createElement("div");
    divColTrois.setAttribute("class", "col-2");
    let divColQuatre = document.createElement("div");
    divColQuatre.setAttribute("class", "col-2");
    let divColCinq = document.createElement("div");
    divColCinq.setAttribute("class", "col-2");

    /**** Colonne 1 : image du produit
     *    Colonne 2 : titre et description du produit
     *    Colonne 3 : quantité désirée
     *    Colonne 4 : option de taille
     *    Colonne 5 : option de complement */

    let imgColUn = document.createElement("img");
    imgColUn.setAttribute("src", "img/card3carrousel.jpeg");
    imgColUn.setAttribute("class", "img-fluid");
    imgColUn.setAttribute("alt", "Bouquet");
    divColUn.appendChild(imgColUn);

    let titreColDeux = document.createElement("h2");
    titreColDeux.innerText = "Bouquet de mariage";
    let descColDeux = document.createElement("p");
    descColDeux.innerText = "Belle bouquet avec les plus belles roses du la session.";
    divColDeux.appendChild(titreColDeux);
    divColDeux.appendChild(descColDeux);

    divColTrois.innerText = "Qté : " + monStockage.getItem("qteBouquet");
    divColQuatre.innerText = "Taille: " + monStockage.getItem("tailleBouquet");
    divColCinq.innerText = "Complement: " + monStockage.getItem("complementBouquet");
    

    /*Cacher le titre Panier vide*/
    document.getElementById("titrePanierVide").classList.add("d-none");
    /*Afficher le bouton pour vider le panier*/
    document.getElementById("boutonEffacer").classList.remove("d-none");

    /*Afficher la nouvelle div dans le container*/
    divRangee.appendChild(divColUn);
    divRangee.appendChild(divColDeux);
    divRangee.appendChild(divColTrois);
    divRangee.appendChild(divColQuatre);
    divRangee.appendChild(divColCinq);
    document.getElementById("panier").appendChild(divRangee);

    /*Afficher le bouton pour commander*/
    document.getElementById("boutonCommander").classList.remove("d-none");
}

/*Création du contenu pour la page decoration, produit decoration d,exterieur*/
function afficheProduitExt()
{
    let monStockage = sessionStorage;

    /*Création de la rangée du grid*/
    let divRangee = document.createElement("div");
    divRangee.setAttribute("class", "row m-3");
    divRangee.setAttribute("id", "divProduitExterieur");

    /*Création des colonnes du grid*/
    let divColUn = document.createElement("div");
    divColUn.setAttribute("class", "col");
    let divColDeux = document.createElement("div");
    divColDeux.setAttribute("class", "col");
    let divColTrois = document.createElement("div");
    divColTrois.setAttribute("class", "col-2");
    let divColQuatre = document.createElement("div");
    divColQuatre.setAttribute("class", "col-2");

    /**** Colonne 1 : image du produit
     *    Colonne 2 : titre et description du produit
     *    Colonne 3 : quantité désirée
     *    Colonne 4 : option de complement */

    let imgColUn = document.createElement("img");
    imgColUn.setAttribute("src", "img/pexels-photo-169193.webp");
    imgColUn.setAttribute("class", "img-fluid");
    imgColUn.setAttribute("alt", "Decoration Exterieur");
    divColUn.appendChild(imgColUn);

    let titreColDeux = document.createElement("h2");
    titreColDeux.innerText = "Decoration d'exterieur";
    let descColDeux = document.createElement("p");
    descColDeux.innerText = "Belle decoration exterieur avec les plus belles fleurs de la session.";
    divColDeux.appendChild(titreColDeux);
    divColDeux.appendChild(descColDeux);

    divColTrois.innerText = "Qté : " + monStockage.getItem("qteExt");
    divColQuatre.innerText = "Complement: " + monStockage.getItem("complementExt");
    

    /*Cacher le titre Panier vide*/
    document.getElementById("titrePanierVide").classList.add("d-none");
    /*Afficher le bouton pour vider le panier*/
    document.getElementById("boutonEffacer").classList.remove("d-none");

    /*Afficher la nouvelle div dans le container*/
    divRangee.appendChild(divColUn);
    divRangee.appendChild(divColDeux);
    divRangee.appendChild(divColTrois);
    divRangee.appendChild(divColQuatre);
    document.getElementById("panier").appendChild(divRangee);

    /*Afficher le bouton pour commander*/
    document.getElementById("boutonCommander").classList.remove("d-none");
}

/*Vider le sessionStorage et recharger la page pour la réinitialiser*/
function viderPanier()
{
    //Vider le sessionStorage avant de recharger la page
    sessionStorage.clear();
    location.reload();
}

function facture(){

    let monStockage = sessionStorage;

    let prixRoses = 85;
    let factureRoses;
    let prixtailleRoses;
    let complementRose;

    let prixTulipes = 85;
    let factureTulipe;
    let prixtailleTulipe;
    let complementTulipe;

    let prixBouquet = 120;
    let factureBouquet;
    let prixtailleBouquet;
    let complementBouquet;

    let prixExt = 900;
    let factureExt;
    let complementExt;
    let factureTotal;

        // creation div pour ajouter les produits dans la facture
        let divfacture = document.createElement("div");

        //creation paragraphe avec l information des produits 
        let paragrapheRose = document.createElement("p");
        let paragrapheTulipe = document.createElement("p");
        let paragrapheBouquet = document.createElement("p");
        let paragrapheExterieur = document.createElement("p");
        let titletotal = document.createElement("h4");

    //Facture roses
    //complement des roses 
    if (monStockage.getItem("complementRose")== "toutou" ){
        complementRose = 20;
    } else if (monStockage.getItem("complementRose")== "chocolat"){
        complementRose = 15;
    } else {
        complementRose = 0;
    }
    //taille roses
    if (monStockage.getItem("tailleRose")== "superieur"){
        prixtailleRoses=15;
    } else if (monStockage.getItem("tailleRose")== "deluxe"){
        prixtailleRoses=30;
    } else {
        prixtailleRoses=0;
    }
     factureRoses= monStockage.getItem("qteRose")* (prixRoses+ complementRose+prixtailleRoses);
   
     //Promotion 3x2
    if (monStockage.getItem("qteRose") >= 2 && monStockage.getItem("tailleRose")== "deluxe"){
        paragrapheRose.innerText = "Bouquet roses \nPrix: 85$ \nQte: " + monStockage.getItem("qteRose") + "\n Promotion: 1 bouquet des roses deluxe " + "\n Taille: " + monStockage.getItem("tailleRose");
    } else {
        paragrapheRose.innerText = "Bouquet roses \nPrix: 85$ \nQte: " + monStockage.getItem("qteRose") + "\n Taille: " + monStockage.getItem("tailleRose");
    }
    
   //Facture Tulipes
    //complement des tulipes
    if (monStockage.getItem("complementTulipe")== "toutou" ){
        complementTulipe = 20;
    } else if (monStockage.getItem("complementTulipe")== "chocolat"){
        complementTulipe = 15;
    } else {
        complementTulipe = 0;
    }
    //taille Tulipes
    if (monStockage.getItem("tailleTulipe")== "superieur"){
        prixtailleTulipe =15;
    } else if (monStockage.getItem("tailleTulipe")== "deluxe"){
        prixtailleTulipe =30;
    } else {
        prixtailleTulipe =0;
    }
     factureTulipe= monStockage.getItem("qteTulipe")* (prixTulipes + complementTulipe + prixtailleTulipe);

    //Promotion 3x2
    if (monStockage.getItem("qteTulipe") >= 2 && monStockage.getItem("tailleTulipe")== "deluxe"){
        paragrapheTulipe.innerText = "Bouquet Tulipes \nPrix: 85$ \nQte: " + monStockage.getItem("qteTulipe") + "\n Promotion: 1 bouquet des Tulipes deluxe " + "\n Taille: " + monStockage.getItem("tailleTulipe");
    } else {
        paragrapheTulipe.innerText = "Bouquet Tulipes \nPrix: 85$ \n Qte: " + monStockage.getItem("qteTulipe") + "\n Taille: " + monStockage.getItem("tailleTulipe");
    }

    //Facture Bouquets
    //complement des Bouquets
    if (monStockage.getItem("complementBouquet")== "tissu" ){
        complementBouquet = 20;
    } else if (monStockage.getItem("complementBouquet")== "perle"){
        complementBouquet = 50;
    } else {
        complementBouquet = 0;
    }
    //taille Bouquets
    if (monStockage.getItem("tailleBouquet")== "superieur"){
        prixtailleBouquet = 30;
    } else if (monStockage.getItem("tailleBouquet")== "deluxe"){
        prixtailleBouquet = 40;
    } else {
        prixtailleBouquet = 0;
    }
    factureBouquet = monStockage.getItem("qteBouquet")* (prixBouquet + complementBouquet + prixtailleBouquet);
    paragrapheBouquet.innerText = "Bouquet de mariage \nPrix: 120$ \n Qte: " + monStockage.getItem("qteBouquet") + "\n Taille: " + monStockage.getItem("tailleBouquet");

   
    //Facture Exterieurs
    //complement des Exterieurs
    if (monStockage.getItem("complementExt")== "jardinerie" ){
        complementExt = 400;
    } else if (monStockage.getItem("complementExt")== "table"){
        complementExt = 200;
    } else {
        complementExt = 0;
    }
    factureExt = monStockage.getItem("qteExt")* (prixExt + complementExt);
    paragrapheExterieur.innerText = "Decoration d exterieur \nPrix: 900$ \n Qte: " + monStockage.getItem("qteExt");
        
    //facture total
    factureTotal = factureRoses + factureTulipe + factureBouquet + factureExt ;

    titletotal.innerText = "Total de la facture: " + factureTotal;
    if (monStockage.getItem("qteRose")>0){           
        divfacture.appendChild(paragrapheRose); 
    }
    if (monStockage.getItem("qteTulipe")>0){
       divfacture.appendChild(paragrapheTulipe); 
    }
    if (monStockage.getItem("qteBouquet")>0){
        divfacture.appendChild(paragrapheBouquet); 
    }
    if (monStockage.getItem("qteExt")>0){
        divfacture.appendChild(paragrapheExterieur);
    }
    divfacture.appendChild(titletotal);
    document.getElementById("factureContenu").appendChild(divfacture);
     
}
   
function merci(){
    alert ("Merci pour votre achat");
    document.getElementById("staticBackdrop").setAttribute("data-bs-dismiss", "modal");
}

    



