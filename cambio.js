var array1 = [document.getElementById("caja1-1"), document.getElementById("caja1-2"), document.getElementById("caja1-3")]
var img = document.getElementById("primera-imagen");

array1[0].onclick = function(){
    img.src="img/1.png";
    array1[0].style.background="white";
    array1[1].style.background="none";
    array1[2].style.background="none";
}

array1[1].onclick = function(){
    img.src="img/atardecer.jpeg";
    array1[0].style.background="none";
    array1[2].style.background="none";
    array1[1].style.background="white";

}

array1[2].onclick = function(){
    img.src="img/caja1-3.png";
    array1[0].style.background="none";
    array1[1].style.background="none";
    array1[2].style.background="white";
}
