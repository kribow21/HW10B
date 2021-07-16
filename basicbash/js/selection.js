

var productOne = Cookies.get("blushPalette");
var productTwo = Cookies.get("gloss");
var productThree = Cookies.get("highlightPalette");


var imageblush = document.createElement('img');
imageblush.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavUohSrR0Mjk8WFh3V_I5BJ5vw9veFGdGOA&usqp=CAU");
// document.getElementById('cart').append(imageblush);

var imagelip = document.createElement('img');
imagelip.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5s1kvxYQEq43pgS6W0aBXSO2MDraHRi0NQ&usqp=CAU");
// document.getElementById('cart').append(imagelip);

var imagehighlight = document.createElement('img');
imagehighlight.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeVMQktAiDDfojGrYiNKg6zxfYjfMfMIVPg&usqp=CAU" );
// document.getElementById('cart').append(imagehighlight);

var elseStatement = document.createElement('h1');
// document.getElementById('else').innerHTML = "Please select a product";

if (productOne == "blushSelected" ){
    document.getElementById('cart').append(imageblush);
}
else if(productTwo == "glossSelected"){
    document.getElementById('cart').append(imagelip);
}
else if(productThree == "highlightSelected"){
    document.getElementById('cart').append(imagehighlight);
}
else {
    document.getElementById('else').innerHTML = "Please select a product"; ;
}
