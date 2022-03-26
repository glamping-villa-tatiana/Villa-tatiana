// array primer tanda de imagenes
var array1 = [document.getElementById("caja1-1"), document.getElementById("caja1-2"), document.getElementById("caja1-3")]
var img = document.getElementById("primera-imagen");


array1[0].onclick = function(){
    img.src="imgUbicacion/pueblo-1.jpg";
    array1[0].style.background="white";
    array1[1].style.background="none";
    array1[2].style.background="none";
}

array1[1].onclick = function(){
    img.src="imgUbicacion/pueblo-2.jpg";
    array1[0].style.background="none";
    array1[2].style.background="none";
    array1[1].style.background="white";

}

array1[2].onclick = function(){
    img.src="imgUbicacion/pueblo-3.jpg";
    array1[0].style.background="none";
    array1[1].style.background="none";
    array1[2].style.background="white";
}

// array segunda tanda de imagenes
var array2 = [document.getElementById("caja2-1"), document.getElementById("caja2-2"), document.getElementById("caja2-3"), document.getElementById("caja2-4"), document.getElementById("caja2-5")]

var img2 = document.getElementById("segunda-imagen");


array2[0].onclick = function(){
    img2.src="imgUbicacion/paisajes-1.jpg";
    array2[0].style.background="#bea383";
    array2[1].style.background="none";
    array2[2].style.background="none";
    array2[3].style.background="none";
    array2[4].style.background="none";
}

array2[1].onclick = function(){
    img2.src="imgUbicacion/paisajes-2.jpg";
    array2[0].style.background="none";
    array2[2].style.background="none";
    array2[1].style.background="#bea383";
    array2[3].style.background="none";
    array2[4].style.background="none";

}

array2[2].onclick = function(){
    img2.src="imgUbicacion/paisajes-3.jpg";
    array2[0].style.background="none";
    array2[1].style.background="none";
    array2[2].style.background="#bea383";
    array2[3].style.background="none";
    array2[4].style.background="none";
}


// array tercer tanda de imagenes
var array3 = [document.getElementById("caja3-1"), document.getElementById("caja3-2")]
var img3 = document.getElementById("tercera-imagen");


array3[0].onclick = function(){
    img3.src="imgUbicacion/penol-1.jpg";
    array3[0].style.background="white";
    array3[1].style.background="none";
}

array3[1].onclick = function(){
    img3.src="imgUbicacion/penol-2.jpg";
    array3[0].style.background="none";
    array3[1].style.background="white";
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