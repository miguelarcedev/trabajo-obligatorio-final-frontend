
var maxCurso = -Infinity;
let boton_calcular_cursos = document.getElementById('boton_alumnos_curso');

boton_calcular_cursos.addEventListener('click', ()=>{

// Traer los datos
    fetch(url)
      .then(respuesta => respuesta.json())
      //buscar al mejor promedio
      .then(datos => {
        datos.forEach(alumno => {
           
            if (alumno.curso > maxCurso) {
              // Actualiza el valor más alto si se encuentra uno mayor
              maxCurso = alumno.curso;
            }
          console.log(maxCurso)
        });
      })

      .then(datos => {
        datos.forEach(alumno => {
           
            if (alumno.curso > maxCurso) {
              // Actualiza el valor más alto si se encuentra uno mayor
              maxCurso = alumno.curso;
            }
          console.log(maxCurso)
        });
      })

    })