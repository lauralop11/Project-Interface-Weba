/*Fonction qui conserve l'information du fleuriste*/

function ajouterFactureProduit()
{
    let formulaire = document.getElementById("formProd1");
    let monStockage = sessionStorage;

    if(formulaire.qteRose.value >0)
    {   
        monStockage.setItem("qteRose", formulaire.qteRose.value);
        monStockage.setItem("tailleRose", formulaire.tailleRose.value);
        monStockage.setItem("complementRose", formulaire.complementRose.value);
    }
    if(formulaire.qteTulipe.value >0)
    {   
        monStockage.setItem("qteTulipe", formulaire.qteTulipe.value);
        monStockage.setItem("tailleTulipe", formulaire.tailleTulipe.value);
        monStockage.setItem("complemenTulipe", formulaire.complemenTulipe.value);  
    } 
}
/*Function qui conserve l'information du decoration*/
function ajouterFactureDecoration()
{
    let formulaire = document.getElementById("formDeco");
    let monStockage = sessionStorage;

    if(formulaire.qteBouquet.value >0)
    {
        monStockage.setItem("qteBouquet", formulaire.qteBouquet.value);
        monStockage.setItem("tailleBouquet", formulaire.tailleBouquet.value);
        monStockage.setItem("complementBouquet", formulaire.complementBouquet.value);   
    } 
    if(formulaire.qteExt.value > 0)
    {   
        monStockage.setItem("qteExt", formulaire.qteExt.value);
        monStockage.setItem("complementExt", formulaire.complementExt.value);
    } 
}    
//function pour ajouter le numero des produits dans le panier
function qtePanier(){
    let monStockage = sessionStorage;
    let qtePanier=0;

    let roses = Number(monStockage.getItem("qteRose"));
    let tulipes = Number(monStockage.getItem("qteTulipe"));
    let bouquets = Number(monStockage.getItem("qteBouquet"));
    let ext = Number(monStockage.getItem("qteExt"));

    if(roses > 0)
    {
        qtePanier=qtePanier+roses;
    }
    if(tulipes > 0)
    {
        qtePanier=qtePanier+tulipes;
    }
    if(bouquets > 0)
    {
        qtePanier=qtePanier+bouquets;
    }
    if(ext > 0)
    {
        qtePanier=qtePanier+ext;
    }
    monStockage.setItem("qtePanier", qtePanier);
    document.getElementById("qteAchete").innerHTML = monStockage.getItem("qtePanier");

}
