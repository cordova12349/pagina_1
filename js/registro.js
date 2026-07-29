import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    if(password !== confirmar){

        alert("Las contraseñas no coinciden.");
        return;

    }

    try{

        const credencial = await createUserWithEmailAndPassword(

            auth,
            correo,
            password

        );

        const usuario = credencial.user;

        await setDoc(doc(db,"usuarios",usuario.uid),{

            uid: usuario.uid,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            fechaRegistro: new Date()

        });

        alert("Cuenta creada correctamente.");

        window.location.href="login.html";

    }

    catch(error){

        alert(error.message);

    }

});