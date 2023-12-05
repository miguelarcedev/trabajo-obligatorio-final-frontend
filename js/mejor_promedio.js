let mejor_alumno_escuela = undefined;
let promedio = 0;
let calificacion_mayor = undefined;
let mostrar = []
let parrafo_mostrar = document.getElementById('calculado');
let boton_calcular = document.getElementById('boton_calcular');

boton_calcular.addEventListener('click', ()=>{

// Traer los datos
    fetch(url)
      .then(respuesta => respuesta.json())
      //buscar al mejor promedio
      .then(datos => {
        datos.forEach(alumno => {
            promedio = (alumno.biologia + alumno.filosofia + alumno.fisica + alumno.ingles + alumno.literatura + alumno.matematica + alumno.musica + alumno.quimica) / 8
            /* console.log(`El alumno ${alumno.nombre} tiene de promedio ${promedio}`)  */
            if (promedio == calificacion_mayor){
                mejor_alumno_escuela = [mejor_alumno_escuela,alumno]
            }
            if(mejor_alumno_escuela == undefined || promedio > calificacion_mayor){
                calificacion_mayor = promedio;
                mejor_alumno_escuela = alumno;
            }
        });
      })
      //agregarlo/s a la lista a mostrar
      .then(() =>{
          if(Array.isArray(mejor_alumno_escuela)){
          mejor_alumno_escuela[0].forEach(estudiante => {
              console.log(`- ${estudiante.nombre}`)
              mostrar.push(estudiante)
          })
        }else(mostrar.push(mejor_alumno_escuela))
      })
      //mandarlos al párrafo creado en html
      .then(()=>{
        let parr = document.createElement('p')

        for (alumno of mostrar) {
          parr = document.createElement('p');
          parr.textContent = `
            El/los mejor/es alumno/s de la escuela: ${alumno.nombre}, perteneciente al curso: ${alumno.curso}, tiene de promedio: ${calificacion_mayor}`;
        
          parrafo_mostrar.appendChild(parr);
        }
      })
      boton_calcular.setAttribute("disabled", true);
    });