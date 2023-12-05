console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
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
url:'http://grupocac.pythonanywhere.com/alumnos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data)
this.id=data.id
this.nombre = data.nombre;
this.edad = data.edad;
this.curso = data.curso;
this.biologia = data.biologia;
this.filosofia = data.filosofia;
this.fisica = data.fisica;
this.ingles = data.ingles;
this.literatura = data.literatura;
this.matematica = data.matematica;
this.musica = data.musica;
this.quimica = data.quimica;
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
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
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./alumnos.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')