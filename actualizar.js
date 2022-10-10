import { materias } from "./materias.js";
export const actualizar=
materias.splice( 2,3, {id:4,
    nombre:"quimica",
    instructor:"deissy",
    tipo: "transversal",
    notas: [
     4.0,
     4.2,
     3.2]
    })