// Importaciones
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBkW1DJsiNwGnFdwK5qlRPCrO31O2jsD7g",
    authDomain: "loginfirebasepro-7e056.firebaseapp.com",
    projectId: "loginfirebasepro-7e056",
    storageBucket: "loginfirebasepro-7e056.firebasestorage.app",
    messagingSenderId: "461242380465",
    appId: "1:461242380465:web:05f090d251a120e217f290"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar
export { auth, db };