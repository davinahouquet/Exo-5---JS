
const resultat = document.getElementById("resultat");
var nb = document.getElementById("input").value;

//Fonction qui calcul (valeur en euros / 6,55957 )

function calcDevise(){

  if(!empty(nb)){
    resultat = nb/6,55957;
    resultat.toFixed(2);
   }
   console.log(resultat);
   "= " +resultat +" francs"
}

//Quand on entre une valeur dans input on appelle la fonction calcDevise
document.getElementById("input").addEventListener("keypres")