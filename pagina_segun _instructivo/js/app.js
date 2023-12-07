// app.js

// Función para crear y mostrar la tabla
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