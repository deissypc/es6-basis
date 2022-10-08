let colors = require('colors');



const g1=["laura",
         "carlos", 
           "ana"
         ]

const g2=[
            "furique",
            "jairo",
            "valeria"
         ]

const g3= [
    ...g1,
    "diana",
    ...g2,
    "duvan"
]     

//desestructurar objeto
const estudiante = {
    id:1,
    nombre:'deissy',
    apellido:'parra',
    identificacion: 1033684971,
    amigos: g3
    }


//desestructurar el estudiante
/*let{ nombre,identificacion }=estudiante


console.log(identificacion)
console.log(nombre.red)

//desestructurar arreglo el estudiante
let [ , c, ,j]=estudiantes

console.log(c,j)*/

//desestructurar arreglo el estudiante
console.log(estudiante);

