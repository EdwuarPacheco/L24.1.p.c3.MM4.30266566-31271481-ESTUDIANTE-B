/*Se tiene de varios estudiantes su nombre, semestre y nota.
 También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados. 
   */

   let persona = [
    { nombre: 'Pablito', semestre: 5, nota: 14 },
    { nombre: 'Pepito', semestre: 5, nota: 16 },
    { nombre: 'Pedrito', semestre: 3, nota: 12 },
    { nombre: 'Javier', semestre: 3, nota: 20 },
    { nombre: 'Jorge', semestre: 6, nota: 18 },
    { nombre: 'Kevin', semestre: 3, nota: 15 },
    { nombre: 'Ricardo', semestre: 2, nota: 10 },
];

function nombreAprobados(estudiantes){
    let aprobados = estudiantes.filter(estudiante => estudiante.nota >= 10);
    return aprobados.map(estudiante => estudiante.nombre);
};
let personasA = nombreAprobados(persona);
let salida = document.getElementById("salida");
personasA.forEach(persona => salida.innerHTML += `<br> Estudiante aprobado en su respectivo semestre: ${persona}`);
;