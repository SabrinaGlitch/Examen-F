var cuentas = JSON.parse(localStorage.getItem("cuentas"));

const pizza1 = [{"id": "p1", "nombre": "Pizza aceitunas", "imagen": "img/uno.jpg", "descripcion": "aceitunas negras", "cantidad": "1", "precio": "$150"}];
const pizza2 = [{"id": "p2", "nombre": "Pizza pepperoni", "imagen": "img/dos.jpg", "descripcion": "pepperoni", "cantidad": "1", "precio": "$150"}];
const pizza3 = [{"id": "p3", "nombre": "Pizza hawaiana", "imagen": "img/tres.jpg", "descripcion": "jamon y piña", "cantidad": "1", "precio": "$150"}];
const pizza4 = [{"id": "p4", "nombre": "Pizza champiñones", "imagen": "img/cuatro.jpg", "descripcion": "champiñones", "cantidad": "1", "precio": "$150"}];
const pizza5 = [{"id": "p5", "nombre": "Pizza mexicana", "imagen": "img/cinco.jpg", "descripcion": "chorizo y chile", "cantidad": "1", "precio": "$150"}];
const pizza6 = [{"id": "p6", "nombre": "Pizza margarita", "imagen": "img/seis.jpeg", "descripcion": "hojitas", "cantidad": "1", "precio": "$150"}];
const pizza7 = [{"id": "p7", "nombre": "Pizza vegetariana", "imagen": "img/siete.jpeg", "descripcion": "verduras", "cantidad": "1", "precio": "$150"}];
const pizza8 = [{"id": "p8", "nombre": "Pizza queso", "imagen": "img/ocho.jpg", "descripcion": "queso", "cantidad": "1", "precio": "$150"}];

var tar1 = "", tar2 = "", tar3="", tar4="", tar5="", tar6="", tar7="", tar8=""; 

localStorage.setItem("producto1", JSON.stringify(pizza1));
localStorage.setItem("producto2", JSON.stringify(pizza2));
localStorage.setItem("producto3", JSON.stringify(pizza3));
localStorage.setItem("producto4", JSON.stringify(pizza4));
localStorage.setItem("producto5", JSON.stringify(pizza5));
localStorage.setItem("producto6", JSON.stringify(pizza6));
localStorage.setItem("producto7", JSON.stringify(pizza7));
localStorage.setItem("producto8", JSON.stringify(pizza8));

var registrarUsuario = function (){
	let actualUs = 0;
	const nombre = document.getElementById("renombre").value;
	const apellido = document.getElementById("reapp").value;
	const correo = document.getElementById("reco").value;
	const contraseña = document.getElementById("recont").value;

	if(nombre==""||apellido==""||correo==""||contraseña==""){
			alert("No puede dejar campos en blanco!");
	}else{
		actualUs = [{"nombre": nombre, "apellido": apellido, "correo": correo, "contraseña": contraseña}];
		
		if(cuentas == null){
			inserta(actualUs);
			location.href='index.html';
			alert(nombre+" "+apellido+", has sido registrado correctamente!");
		}else{
			alert("Por problemas tecnicos solo se permite una cuenta :/");
			let btnRegistrar = document.getElementById("rere");
			document.getElementById("rere").disabled=true;
			const re =  document.getElementById("rere");
			re.style.backgroundColor = 'gray';
				/*if(confirma(correo)==false){
				inserta(actualUs);
				location.href='index.html';
				alert(nombre+" "+apellido+", has sido registrado correctamente!");
			}else{
				alert("Este correo ya existe!");
				document.getElementById("renombre").value = "";
				document.getElementById("reapp").value = "";
				document.getElementById("reco").value = "";
				document.getElementById("recont").value = "";
			}*/
		}
	}

}

var iniciarSesion = function(){
	const correo2 = document.getElementById("iniCo").value;
	const contraseña2 = document.getElementById("iniPass").value;

	for(var i in cuentas){
		console.log(cuentas[i])
		if(correo2 == cuentas[i].correo&&contraseña2 == cuentas[i].contraseña){
			location.href='inicio.html';
			alert("Bienvenido, "+cuentas[i].nombre+" "+cuentas[i].apellido);
		}else{
			alert("Los datos introducidos no son correctos.");
		}
	}
}

var confirma = function(e){
	for(var i in cuentas){
		if(e == cuentas[i].correo){
			return true;
		}else{return false;}
	}
}

var inserta = function(nuevo){
	if(localStorage.getItem("cuentas")==null){
		localStorage.setItem("cuentas", JSON.stringify(nuevo));
	}else{	
		cuentas = JSON.parse(localStorage.getItem("cuentas"));
		cuentas.push(nuevo);
		localStorage.setItem("cuentas", JSON.stringify(cuentas));
	}
}

const agg1 = function(datos){
	document.querySelector(".contenido3").innerHTML = datos;
}
const agg2 = function(datos){
	document.querySelector(".contenido4").innerHTML = datos;
}


var ag1 = function(){
	let id = "p1";

	tar1 = document.querySelector(".tarjeta1");
	console.log(tar1);

	agg1(tar1);

}
var ag2 = function(){
	let id = "p2";

	tar2 = document.querySelector(".tarjeta2");
	console.log(tar2);

	agg1(tar2);
}
var ag3 = function(){
	let id = "p3";

	tar3 = document.querySelector(".tarjeta3");
	console.log(tar3);

	agg1(tar3);
}
var ag4 = function(){
	let id = "p4";

	tar4 = document.querySelector(".tarjeta4");
	console.log(tar4);

	agg1(tar4);
}
var ag5 = function(){
	let id = "p5";

	tar5 = document.querySelector(".tarjeta5");
	console.log(tar5);

	agg2(tar5);
}
var ag6 = function(){
	let id = "p6";

	tar6 = document.querySelector(".tarjeta6");
	console.log(tar6);

	agg2(tar6);
}
var ag7 = function(){
	let id = "p7";

	tar7 = document.querySelector(".tarjeta7");
	console.log(tar7);

	agg2(tar7);
}
var ag8 = function(){
	let id = "p8";

	tar8 = document.querySelector(".tarjeta8");
	console.log(tar8);

	agg2(tar8);
}






