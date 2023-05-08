// La fecha de hoy
const fecha_hoy = new Date();

console.log(fecha_hoy);

// Fecha de mi nacimiento
const miNacimiento = new Date(2002, 9, 4);

console.log(miNacimiento);

// Un variable que indique si hoy es más tarde (>) que la fecha de mi nacimiento
const comparacion = fecha_hoy > miNacimiento;

console.log(comparacion);

// Una variable que contenga el día de mi nacimiento
const DiaNacimiento = miNacimiento.getDate();

console.log(DiaNacimiento);

// Una variable que contenga el mes de mi nacimiento
const MesNacimiento = ( miNacimiento.getMonth() + 1 );

console.log(MesNacimiento);

// Una variable que contenga el año de mi nacimiento
const AñioNacimiento = miNacimiento.getFullYear();

console.log(AñioNacimiento);