let bataTotal = 0;
let nikeTotal = 0;
let leatherTotal = 0;
let adidasTotal = 0;

let addToCart = (param) => {

    if (param == "bata") {
        bataTotal = Number(document.getElementsByClassName("price")[0].innerHTML * Number(document.getElementsByClassName("quantity")[0].value));
    } else if (param == "nike") {
        nikeTotal = Number(document.getElementsByClassName("price")[1].innerHTML * Number(document.getElementsByClassName("quantity")[1].value));
    } else if (param == "leather") {
        leatherTotal = Number(document.getElementsByClassName("price")[2].innerHTML * Number(document.getElementsByClassName("quantity")[2].value));
    } else if (param == "adidas") {
        adidasTotal = Number(document.getElementsByClassName("price")[3].innerHTML * Number(document.getElementsByClassName("quantity")[3].value));
    }
    
    document.getElementById("totalCost").innerHTML = bataTotal + nikeTotal + leatherTotal + adidasTotal;
}