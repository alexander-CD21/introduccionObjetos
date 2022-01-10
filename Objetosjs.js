//Definicion de objetos y sus propiedades 
let estudiante={
    nombre:"alexander",
    apellido:"guilen",
    edad:"25",
    casado : false,
    imprimeDatos: function() {
        console.log(this.nombre,this.apellido,this.edad,this.casado);
    },
    //Definiendo un objeto dentro de otro objeto 
    hobbies :["Programar","Cantar","Bailar"],
    hermanos:{
        nombre1 : "Alejandro",
        nombre2 : "Martha",
    },
};
//imprime el objeto 
console.log (estudiante);
//Agrega una propiedad al objeto
estudiante.apellido=" Vasquez";
console.log(estudiante.nombre,estudiante.apellido);
//Agregar una propiedad al objeto 
estudiante.profesion="medico";
let propiedad="edad";
//Otra notacion como se llama a un propiedad de un objeto
console.log(estudiante["apellido"]);
let propiedad="edad";
console.log(estudiante[propiedad]);
estudiante.imprimeDatos();

console.log("Hermanos");
console.log(estudiante.hermanos.nombre1,estudiante.hermanos.nombre2);


let listaEstudiante = [
    {
        nombre:"Miguel",
        apellido:"Gomez",
        edad:23,
    },
    {
        nombre:"Alan",
        apellido:"Morales",
        edad:22,
    },
    {
        nombre:"Martha",
        apellido:"Sanchez",
        edad:22,
    }
];

for(let i=0; i<listaEstudiante.length;i++){
    console.log(listaEstudiante[i].nombre,listaEstudiante[i].apellido);
}

console.log(estudiante);

delete estudiante.casado;

console.log(estudiante);