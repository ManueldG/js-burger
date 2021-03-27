var nome = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var price0 = document.getElementById('price').textContent;


document.getElementById("button").addEventListener("click", function() {
    
    console.log(ingredients);
    var somma = 0;
    var price = parseFloat(price0);
    
    console.log(price);
    if (nome.value.length===0)
        alert('inserisci il nome del panino');
    else
    {
        for (var i=0 ; i < ingredients.length ; i++)
           somma += ingredients[i].checked ? parseFloat(ingredients[i].value) : 0;
    }

    
    price = (parseFloat(price)+somma).toFixed(2);
    console.log(price);
    document.getElementById('price').textContent= price;
    
    
    
}); 