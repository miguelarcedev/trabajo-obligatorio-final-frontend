//READ
const url = 'http://grupocac.pythonanywhere.com/alumnos'; //api 
let cargando = document.getElementById('cargando');
let error = document.getElementById('error_sorry');
  // Traer los datos
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos =>{
        // Traer la tabla
        const tablaAlumnos = document.getElementById('alumnosTable');

        // Iterar sobre los datos y crear filas para cada alumno
        datos.forEach(alumno => {
            const fila = document.createElement('tr');

            // Insertar datos en cada celda
            fila.innerHTML = `
                    <td>${alumno.id}</td>
                    <td>${alumno.nombre}</td>
                    <td>${alumno.edad}</td>
                    <td>${alumno.curso}</td>
                    <td>${alumno.biologia}</td>
                    <td>${alumno.filosofia}</td>
                    <td>${alumno.fisica}</td>
                    <td>${alumno.ingles}</td>
                    <td>${alumno.literatura}</td>
                    <td>${alumno.matematica}</td>
                    <td>${alumno.musica}</td>
                    <td>${alumno.quimica}</td>
                `;
       
            tablaAlumnos.appendChild(fila);
            cargando.style.visibility = 'hidden'
            error.style.visibility = 'hidden'
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

//DELETE
let $btnEliminar = document.getElementById('eliminar_alumno')

 $btnEliminar.addEventListener('click', ()=>{
    let id = prompt('Ingrese el id del alumno que desea eliminar: ')
    // Enviar la solicitud HTTP DELETE
    const request = new XMLHttpRequest();
    request.open("DELETE", 'http://grupocac.pythonanywhere.com/alumnos'+"/" + id);
    request.send();

    // Tratar la respuesta
    request.onload = function() {
     if (request.status === 200) {
    // El registro se ha eliminado correctamente
            alert("Registro eliminado correctamente");
        } else {
        // Se ha producido un error
            alert("Error al eliminar el registro");
        }
    };
 })

//POST