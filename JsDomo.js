// array primer tanda de imagenes
var array1 = [document.getElementById("caja1-1"), document.getElementById("caja1-2"), document.getElementById("caja1-3")]
var img = document.getElementById("primera-imagen");


array1[0].onclick = function(){
    img.src="imgDomos/Villa-Lumbre/Domo1.JPG";
    array1[0].style.background="white";
    array1[1].style.background="none";
    array1[2].style.background="none";
}

array1[1].onclick = function(){
    img.src="imgDomos/Villa-Lumbre/Domo2.JPG";
    array1[0].style.background="none";
    array1[2].style.background="none";
    array1[1].style.background="white";

}

array1[2].onclick = function(){
    img.src="imgDomos/Villa-Lumbre/Domo3.JPG";
    array1[0].style.background="none";
    array1[1].style.background="none";
    array1[2].style.background="white";
}

// array segunda tanda de imagenes
var array2 = [document.getElementById("caja2-1"), document.getElementById("caja2-2"), document.getElementById("caja2-3"), document.getElementById("caja2-4"), document.getElementById("caja2-5")]

var img2 = document.getElementById("segunda-imagen");


array2[0].onclick = function(){
    img2.src="imgDomos/Villa-Lumbre/Jacuzzi1.JPG";
    array2[0].style.background="#bea383";
    array2[1].style.background="none";
    array2[2].style.background="none";
    array2[3].style.background="none";
    array2[4].style.background="none";
}

array2[1].onclick = function(){
    img2.src="imgDomos/Villa-Lumbre/Jacuzzi2.JPG";
    array2[0].style.background="none";
    array2[2].style.background="none";
    array2[1].style.background="#bea383";
    array2[3].style.background="none";
    array2[4].style.background="none";

}

array2[2].onclick = function(){
    img2.src="imgDomos/Villa-Lumbre/Malla1.jpeg";
    array2[0].style.background="none";
    array2[1].style.background="none";
    array2[2].style.background="#bea383";
    array2[3].style.background="none";
    array2[4].style.background="none";
}

array2[3].onclick = function(){
    img2.src="imgDomos/Villa-Lumbre/Malla2.JPG";
    array2[0].style.background="none";
    array2[1].style.background="none";
    array2[3].style.background="#bea383";
    array2[2].style.background="none";
    array2[4].style.background="none";
}

array2[4].onclick = function(){
    img2.src="imgDomos/Villa-Lumbre/Malla3.jpeg";
    array2[0].style.background="none";
    array2[1].style.background="none";
    array2[4].style.background="#bea383";
    array2[3].style.background="none";
    array2[2].style.background="none";
}

// array tercer tanda de imagenes
var array3 = [document.getElementById("caja3-1"), document.getElementById("caja3-2"), document.getElementById("caja3-3")]
var img3 = document.getElementById("tercera-imagen");


array3[0].onclick = function(){
    img3.src="imgDomos/Villa-Terra/Domo1.JPG";
    array3[0].style.background="white";
    array3[1].style.background="none";
    array3[2].style.background="none";
}

array3[1].onclick = function(){
    img3.src="imgDomos/Villa-Terra/Domo2.JPG";
    array3[0].style.background="none";
    array3[2].style.background="none";
    array3[1].style.background="white";

}

array3[2].onclick = function(){
    img3.src="imgDomos/Villa-Terra/Domo3.JPG";
    array3[0].style.background="none";
    array3[1].style.background="none";
    array3[2].style.background="white";
}

// array cuarta tanda de imagenes
var array4 = [document.getElementById("caja4-1"), document.getElementById("caja4-2"), document.getElementById("caja4-3"), document.getElementById("caja4-4"), document.getElementById("caja4-5")]

var img4 = document.getElementById("cuarta-imagen");


array4[0].onclick = function(){
    img4.src="imgDomos/Villa-Terra/Jacuzzi1.JPG";
    array4[0].style.background="#bea383";
    array4[1].style.background="none";
    array4[2].style.background="none";
    array4[3].style.background="none";
    array4[4].style.background="none";
}

array4[1].onclick = function(){
    img4.src="imgDomos/Villa-Terra/Jacuzzi2.JPG";
    array4[0].style.background="none";
    array4[2].style.background="none";
    array4[1].style.background="#bea383";
    array4[3].style.background="none";
    array4[4].style.background="none";

}

array4[2].onclick = function(){
    img4.src="imgDomos/Villa-Terra/Jacuzzi3.JPG";
    array4[0].style.background="none";
    array4[1].style.background="none";
    array4[2].style.background="#bea383";
    array4[3].style.background="none";
    array4[4].style.background="none";
}

array4[3].onclick = function(){
    img4.src="imgDomos/Villa-Terra/Malla1.JPG";
    array4[0].style.background="none";
    array4[1].style.background="none";
    array4[3].style.background="#bea383";
    array4[2].style.background="none";
    array4[4].style.background="none";
}

array4[4].onclick = function(){
    img4.src="imgDomos/Villa-Terra/Malla2.JPG";
    array4[0].style.background="none";
    array4[1].style.background="none";
    array4[4].style.background="#bea383";
    array4[3].style.background="none";
    array4[2].style.background="none";
}