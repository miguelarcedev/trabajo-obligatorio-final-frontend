/* console.log('funca') */
let mejores_alumnos = []
let mostrar_promedios = []
let mostrar_alumnos = []
let parrafo_mostrar_mejores = document.getElementById('promedio-calculado');
let boton_calcular_mejores = document.getElementById('boton_calcular_todos');

function mejor_alumno(alumnos, curso){
    let promedio_alumno = 0;
    let calificacion_mayor_curso = undefined;
    let lista_mejores_curso= [];
    let lista_mandar = []
    alumnos.forEach(alumno => {

        if(alumno.curso == curso){
            promedio_alumno = (alumno.biologia + alumno.filosofia + alumno.fisica + alumno.ingles + alumno.literatura + alumno.matematica + alumno.musica + alumno.quimica) / 8
            if(promedio_alumno >= calificacion_mayor_curso||calificacion_mayor_curso==undefined){
                calificacion_mayor_curso = promedio_alumno;
                lista_mejores_curso.push([alumno,promedio_alumno])   
            }
            
        }
    });

    for(alumno of lista_mejores_curso){
        if(alumno[1]==calificacion_mayor_curso){
            lista_mandar.push(alumno);
        }
    }

    return lista_mandar

}


boton_calcular_mejores.addEventListener('click', ()=>{

    
// Traer los datos
    fetch(url)
      .then(respuesta => respuesta.json())
      //buscar al mejor promedio
      .then(alumnos => {
        let mejor_alumno_primero = mejor_alumno(alumnos, 1) 
        let mejor_alumno_segundo = mejor_alumno(alumnos, 2)
        let mejor_alumno_tercero = mejor_alumno(alumnos, 3)
        let mejor_alumno_cuarto = mejor_alumno(alumnos,4)
        let mejor_alumno_quinto = mejor_alumno(alumnos,5)
        let mejor_alumno_sexto = mejor_alumno(alumnos,6)
        mejores_alumnos.push(mejor_alumno_primero)
        mejores_alumnos.push(mejor_alumno_segundo)
        mejores_alumnos.push(mejor_alumno_tercero)
        mejores_alumnos.push(mejor_alumno_cuarto)
        mejores_alumnos.push(mejor_alumno_quinto)
        mejores_alumnos.push(mejor_alumno_sexto)
        //console.log(mejores_alumnos)
      })
      .then(el=>{
            for(curso of mejores_alumnos){
            //console.log(`el mejor alumno es ${alumno} con promedio ${alumno[1]}`)}
            //console.log(curso)
                for (alumno of curso){
                    //console.log(alumno)
                    //console.log(`El ${alumno[0].nombre} del año ${alumno[0].curso}, tiene de nota ${alumno[1]}`);
                    mostrar_alumnos.push(`El alumno: ${alumno[0].nombre} del año ${alumno[0].curso}, tiene de nota ${alumno[1]}. `)
                }
        }
      })
      //mandarlos al párrafo creado en html
      .then(() => {
        let contenedor = document.createElement('div'); // Usamos un div como contenedor
        
        for (alumno of mostrar_alumnos) {
          let elemento = document.createElement('div'); // Usamos divs para cada elemento
          elemento.textContent = alumno;
          contenedor.appendChild(elemento);
        }
        
        parrafo_mostrar_mejores.appendChild(contenedor);
      });
      
      
    });