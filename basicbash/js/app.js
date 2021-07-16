function blushToCart(){
    var blush = document.getElementById('blushButton');
    Cookies.set("blushPalette", "blushSelected");
    var newpath = document.location.href="/basicbash/selection.html";
}

function glossToCart(){
    var blush = document.getElementById('glossButton');
    Cookies.set("gloss", "glossSelected");
    var newpath = document.location.href="/basicbash/selection.html";
}
function highlightToCart(){
    var blush = document.getElementById('highlightButton');
    Cookies.set("highlightPalette", "highlightSelected");
    var newpath = document.location.href="/basicbash/selection.html";
}
