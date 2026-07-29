import { auth } from "./firebase.js";

import {

signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit",async(e)=>{

e.preventDefault();

const correo=document.getElementById("correo").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

correo,

password

);

alert("Bienvenido.");

window.location.href="index.html";

}

catch(error){

alert("Correo o contraseña incorrectos.");

}

});