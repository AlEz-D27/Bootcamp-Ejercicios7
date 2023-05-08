// Un objeto con mis datos personales  (nombre, apellido, edad, altura, eresDesarrollador)
const Datos_personales = {
    nombre: "Ezequiel",
    apellido: "Duarte",
    edad: 21,
    altura: 178,
    eresDesarrollador: false
};

console.log(Datos_personales);

// Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = Datos_personales.edad;

console.log(miEdad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [
    { 
        ...Datos_personales 
    },
    {
        nombre: "Juan",
        apellido: "Grazziani",
        edad: 22,
        altura: 181,
        eresDesarrollador: false
    },
    {
        nombre: "Benjamin",
        apellido: "Ibarra",
        edad: 20,
        altura: 173,
        eresDesarrollador: false
    }
];

console.log(lista);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const nuevLista = lista.sort( (a, b) => b.edad - a. edad );

console.log(nuevLista);