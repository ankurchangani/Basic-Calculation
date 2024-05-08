var  x =1000;
var  y =200;
var  z =3000;
var w = (x+y+z);
var p = (w*10)/100;
var m=(w-p);

document .getElementById ("titel").innerHTML = "Product List";
document . querySelector ("span").innerHTML = x;
document . querySelector ("h6").innerHTML = y;
document . querySelector ("h5").innerHTML = z;


document . querySelector (".product-1").innerHTML = "Chocolate : -";
document . querySelector (".product-2").innerHTML = "  Cheese : -";
document . querySelector (".product-3").innerHTML = "  Fruit-Tella : -";
document . querySelector (".total").innerHTML = "Total :" + w;
document . querySelector (".discount").innerHTML = "Discount :" + p;
document . querySelector (".after").innerHTML = "Total Amount :" + m;



