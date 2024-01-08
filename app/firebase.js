import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection, getDocs,deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBTjVpCHlqhK6xLUd_F5EOZBVc9ElPnDzQ",
  authDomain: "mibiblioteca12-c8e68.firebaseapp.com",
  projectId: "mibiblioteca12-c8e68",
  storageBucket: "mibiblioteca12-c8e68.appspot.com",
  messagingSenderId: "882606809500",
  appId: "1:882606809500:web:6d61d7033b45b22230a859"
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

//borrar libro
export const deleteLibro = (id) => deleteDoc(doc(db, "libros", id));
