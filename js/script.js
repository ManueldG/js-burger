var nome = document.getElementById('name'); // nome hamburger
var ingredients = document.getElementsByClassName('ingredient-checkbox'); //classe ingredienti 
var check = document.getElementsByClassName("ingredient-add"); // classe che contiene la checkbox
var price0 = document.getElementById('price').textContent;
var codici = [11111111111,24539854873,09374583904]; //codici sconto

//gestore evento click su checkbox stilizzata
for (var i=0; i < check.length ; i++)
{
check[i].addEventListener("click", function() {
    
    console.log(this,i);
    this.previousElementSibling.checked = !this.previousElementSibling.checked;
});
}

// getore evento click su bottone
document.getElementById("button").addEventListener("click", function() {
    
    console.log(ingredients);
    var somma = 0;
    var price = parseFloat(price0);
    var coupon = document.getElementById('coupon').value;
    
    console.log(price);

    // se l'input è vuoto richiedi il nome del panino
    if (nome.value.length===0)
        alert('inserisci il nome del panino');
    else // altrimenti
    { //cicla somma il costo dei ingredienti check 
        for (var i=0 ; i < ingredients.length ; i++)
        somma += ingredients[i].checked ? parseFloat(ingredients[i].value) : 0;
    }

    // aggiunge il costo delle aggiunte al prezzo base
    price = (parseFloat(price)+somma);
    if (codici.indexOf(parseInt(coupon))===0) // se nell'array codici esiste il codice inserito applica sconto 20%
    {
        alert('Hai il 20% di sconto!!!')
        console.log ("sconto");
        price *=  4 / 5; //  sconto - sconto * 4 / 5 => raccolgo sconto * (1 - 1/5) => sconto * (5/5 -1/5) = sconto * 4/5
    }  
        
    console.log(price);
    document.getElementById('price').textContent= price.toFixed(2); // scrivo il totale
       
}); 