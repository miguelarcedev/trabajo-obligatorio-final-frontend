const { createApp } = Vue
createApp({
    data() {
        return {
            alumnos: [],
            //url:'http://localhost:5000/alumnos',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            url: 'http://grupocac.pythonanywhere.com/alumnos', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            edad: 0,
            curso: 0,
            biologia: 0,
            filosofia: 0,
            fisica: 0,
            ingles:0,
            literatura:0,
            matematica: 0,
            musica:0,
            quimica:0,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)

                .then(response => response.json())
                .then(data => {
                    this.alumnos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(alumno) {
            const url = this.url + '/' + alumno;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let alumno = {
                nombre: this.nombre,
                edad: this.edad,
                curso: this.curso,
                biologia: this.biologia,
                filosofia: this.filosofia,
                fisica: this.fisica,
                ingles: this.ingles,
                literatura: this.literatura,
                matematica: this.matematica,
                musica: this.musica,
                quimica: this.quimica,
                
            }
            var options = {
                body: JSON.stringify(alumno),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./alumnos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")

                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')