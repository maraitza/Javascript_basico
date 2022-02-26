console.log("Hola")
console.log("Hola otra vez")
// Cuadrado
console.group("Cuadrados");
const lado = 5;

const pcuadrado = lado * 4;
console.log(`El perimetro del cuadrado es: ${pcuadrado}` + "cm");

const acuadrado = lado * lado;
console.log(`El area del cuadrado es: ${acuadrado}`);
console.groupEnd();

// Triangulo
console.group("Triangulos");
const ltriangulo1 = 6;
const ltriangulo2 = 6;
const base = 4;
const altura = 5.5;

console.log(`Los lados del triangulo miden: ${ltriangulo1} ,${ltriangulo2} y ${base} cm`);

const ptriangulo = ltriangulo1 + ltriangulo2 + base;
console.log(`El perimetro del triangulo es: ${ptriangulo}` + "cm");

const atriangulo = (base * altura)/2;
console.log(`El area del triangulo es: ${atriangulo}`);
console.groupEnd();

// Circulo
console.group("Circulo");
const radio = 4;
const diametro = radio * 2;

// PI
const PI =  Math.PI;
const pcirculo =  diametro * PI;
const acirculo = (radio * radio)* PI;

console.log(`El radio del circulo es: ${radio} cm`);
console.log(PI);
console.log(`El perimetro del circulo es: ${pcirculo} cm`);
console.log(`El area del circulo es: ${acirculo} cm`);
console.groupEnd();





