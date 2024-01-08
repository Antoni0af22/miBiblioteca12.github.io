import {onGetLibros,deleteLibro} from './firebase.js'

const librosContainer = document.getElementById('libros-container');

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetLibros((querySnapshot)=>{
        librosContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {        
            const libro = doc.data();
            librosContainer.innerHTML += `
            <div class="card card-body mt-2 border-primary">
            <h3 class="h5">${libro.titulo}</h3>
            <p>${libro.autor}</p>
            <p>${libro.editorial}</p>
            <p>${libro.isbn}</p>
            <p>${libro.fecha}</p>
            <div>
            <button class="btn btn-primary btn-delete" data-id="${doc.id}">
                🗑 Delete
            </button>
            </div>
            </div>`;
        });

        const btnsDelete = librosContainer.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
            await deleteLibro(dataset.id);
        } catch (error) {
            console.log(error);
        }
      })
    );
    })
})
