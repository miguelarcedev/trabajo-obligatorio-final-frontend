//url = 'http://grupocac.pythonanywhere.com/alumnos'
const btn_actualizar = document.getElementById('actualiza_alumno')

// Mandarlos a la api
btn_actualizar.addEventListener('click', (e) =>{
  //datos
  const alumno = {
    id: document.getElementById('identificado').value,
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    curso: document.getElementById("curso").value,
    filosofia: document.getElementById("filosofia").value,
    ingles: document.getElementById("ingles").value,
    fisica: document.getElementById("fisica").value, // Asegúrate de que el campo 'fisica' exista en tu HTML o ajusta según sea necesario
    matematica: document.getElementById("matematicas").value,
    musica: document.getElementById("musica").value,
    literatura: document.getElementById("literatura").value,
    biologia: document.getElementById("biologia").value,
    quimica: document.getElementById("quimica").value,
  };
  console.log(alumno)
  //codigo
  const url = `http://grupocac.pythonanywhere.com/alumnos/${alumno.id}`;
  const metodo = "PUT";
  const headers = {
    "Content-Type": "application/json",
  };
  const datos_en_json = JSON.stringify(alumno);

  fetch(url, {
    method: metodo, // Corregido el nombre de la propiedad
    headers: headers,
    body: datos_en_json // Usar 'body' para enviar los datos
  })
    
  .then((respuesta) => {
      // El registro se ha agregado correctamente
      alert("Registro modificado correctamente");
      console.log(respuesta)
  })
  
  .catch(() => {
      // Se ha producido un error
      alert("Error al agregar el registro");
  });
})
