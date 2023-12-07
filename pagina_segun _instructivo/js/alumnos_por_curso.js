
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

  function crearTabla() {
    // Datos para la tabla (puedes personalizar esto)
    var datos = [
        { nombre: 'Juan', edad: 25, ciudad: 'Ciudad A' },
        { nombre: 'María', edad: 30, ciudad: 'Ciudad B' },
        { nombre: 'Carlos', edad: 22, ciudad: 'Ciudad C' },
    ];

    // Obtén el cuerpo de la tabla
    var tablaBody = document.getElementById('tabla-body');

    // Crea filas y celdas para cada conjunto de datos
    datos.forEach(function (fila) {
        var tr = document.createElement('tr');

        Object.values(fila).forEach(function (valor) {
            var td = document.createElement('td');
            td.textContent = valor;
            tr.appendChild(td);
        });

        tablaBody.appendChild(tr);
    });
}

// Llama a la función al cargar la página
crearTabla();