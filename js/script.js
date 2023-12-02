const url = 'http://grupocac.pythonanywhere.com/alumnos'; //api 
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
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
