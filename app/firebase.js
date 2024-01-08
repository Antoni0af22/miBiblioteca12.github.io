import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  // ...
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

//guardar libro
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });

//lista libros
export const onGetLibros = (callback) => 
    onSnapshot(collection(db,'libros'),callback);