import { saveLibro } from './firebase.js'
  
  /**
   * Save a New Task in Firestore
   * @param {string} titulo 
   * @param {string} autor 
   * @param {string} editorial
   * @param {string} isbn
   * @param {Date} fecha
   */
  
  const librosForm = document.getElementById("libros-form");
  
  librosForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const titulo     = librosForm['libro-titulo']
    const autor      = librosForm['libro-autor']
    const editorial  = librosForm['libro-editorial']
    const isbn       = librosForm['libro-isbn']
    const fecha      = librosForm['libro-fecha']

    saveLibro(titulo.value, autor.value, editorial.value, isbn.value, fecha.value)
    console.log("El libro se guardo con exito")
  })

  


