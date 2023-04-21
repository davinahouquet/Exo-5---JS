//resultatBalise reprrésente l'affchage du résultat. On ne peut pas mettre juste résultat, qui sera égal à un nombre dans la fonction calcDevise, sinon elle sera écrasée
var resultatBalise = document.getElementById("resultat"); 
console.log(resultat);

//Fonction qui calcul (valeur en euros / 6,55957 )
function calcDevise(){
//Variable nb déclarée DANS la fonction pour que la valeur entrée dans l'input soit pris en compte
var nb = document.getElementById("input").value;
//Calcul et arrondissement à la deuxième décimale
  if(nb != null){
    resultat = nb/6.55957;
    resultat = resultat.toFixed(2);
    console.log(resultat);
   }
//Affichage HTML dans la variable crée précedemment
   resultatBalise.innerHTML = "= " +resultat +" francs"
}
