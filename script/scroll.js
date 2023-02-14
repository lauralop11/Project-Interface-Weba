//function bouton scrol haute de page
function fonctionScroll() {
    //Si la racine du document a défilé de plus de 350 pixels, afficher la flèche, sinon la cacher
    if(document.documentElement.scrollTop > 300){

        document.getElementById("to_top_arrow").style.display="block";
    } else {
        document.getElementById("to_top_arrow").style.display="none";
    }
}