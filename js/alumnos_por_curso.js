
const url = 'http://grupocac.pythonanywhere.com/alumnos'; //api

let boton_calcular_cursos = document.getElementById('boton_alumnos_curso');

boton_calcular_cursos.addEventListener('click', ()=>{
  let lista_alumnos_por_curso= [];
// Traer los datos
    fetch(url)
      .then(respuesta => respuesta.json())
     
      .then(datos => {
          for (let i = 1; i <7; i++) {
            let cant_alumnos = 0   
              datos.forEach(alumno => {
                if(alumno.curso == i){
                  cant_alumnos = cant_alumnos + 1    
                }    
                
              });
              lista_alumnos_por_curso.push([i,cant_alumnos]) 
          }
          console.log(lista_alumnos_por_curso)
        })
      
  })