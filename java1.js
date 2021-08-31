// document.write("Dios es Amor,   ")
// document.write("Dios es Misericordioso")

// console.log("Dios es Todopoderoso")
// console.log("La vida es hermosa de la mano de Dios")
// // Tipos de datos
// console.log("Numero tipo float",1000.658)
// console.log("Numero tipo float",1000.658)
// console.log("Entero ",658)
// console.log("tipo Booleano ",true)
// console.log(false)
// console.log('"xkljf"')
// console.log(String)
// console.log([1,2,3,4,5,6,7,8,9,10,'jose','Alfredo','Jiménez'])
// console.log({100:'José',200:'Alfredo',300:'Jiménez',500:'García'})
// console.log(1000,587,698,6587,3241,5477,369,254)
// console.log(' ')
// console.log(' ');
// document.write(1000.658)
// console.log(' ');
// console.log(' ')
// document.write(658)
// document.write(true)
// document.write(false)
// document.write("xkljf")
// document.write(String)
// document.write([1,2,3,4,5,6,7,8,9,10,'jose','Alfredo','Jiménez'])
// document.write({100:'José',200:'Alfred',300:'Jiménez',500:'García'})
// document.write(1000,587,698,6587,3241,5477,369,254)

// let passwordJO ='José'
// let input = 'José'
// let Result = input == passwordJO

// console.log(Result);
// console.log(8+9+6+5-3*(8/9));
// console.log(true);
// console.log(false);

// if (Result==true){
//     console.log("Es correcto")
// }else{
//     console.log("Es incorrecto")
// };

// let opcion=8
// switch (opcion) {
//     case 1:
//         console.log('Ingresar dinero')
//         break;
//     case 2:
//         console.log('Comprar')

//         break;
//     case 3:
//         console.log('Transacción')

//         break;
//      case 4:
//         console.log('Vender')

//         break;
//     default:
//        console.log('No existe esa opción')
//        break;

// }

// let contador=50;
// while(contador > 0) {
// document.write("Dios tiene el control de todo");
// console.log(contador);
// console.log("Dios es Maravilloso  ");
// contador = (contador - 1);

// }

// let usuarios=['José', 'Eunice','Valerie','Stiven','Josesito']

// console.log(usuarios)
// console.log(usuarios.length)
// console.log(usuarios[0]," y ",usuarios[1])

// for (let i=usuarios.length -1; i>=0; i--){
//     console.log(usuarios[i]);
// }
// console.log(' ');

// console.log('Dios es el dador de la vida');
// console.log(' ');

// for (let index = 0; index < usuarios.length; index++) {
//     console.log(usuarios[index]);

// }

// console.log(' ');
// console.log(' ');

// function suma(a,b) {
//    let c= a+b
//    console.log('Esta es la función SUMA, el resultado de',a,' + ', b,' es',c)
// }
// let ao=5000
// let bt=15000
// suma(ao,bt)

// // Creación de arrays
// const meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
// console.table(meses);
// console.log(meses)

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 21, 3, 14, 15, 16, 17, 18, 19, 20,
];

// // Agregar al final de un array
// numeros.push(21,22,23,24,25,26,27,28,29,30)
// numeros.unshift(-5,-4,-3,-2,-1,0)
// console.table(numeros)

// // Elimina el último dato de un array
// numeros.pop();
// console.table(numeros)

// // Elimina el primero dato de un array
// numeros.shift();
// console.table(numeros)

// // Elimina la selección deseada dato de un array
// numeros.splice(17,10)
// console.table(numeros)

// // Crear arreglos nuevos y no modifica el original

// const nuevoarreglo=[...numeros, 21,22,23,24,25,26,27,28,29,30]

// // Inserta elemento en un arreglos nuevo y no modifica el original

// nuevoarreglo.splice(11,3,12,13,'espacio')
// console.table(nuevoarreglo)

// // Crear arreglos con OBJETOS

const carrito = [
  { codigo: 551, nombre: 'TV de 50" pulgadas', precio: 5000 },
  { codigo: 9995, nombre: 'TV de 30" pulgadas', precio: 3000 },
  { codigo: 3239, nombre: "Tablet", precio: 4000 },
  { codigo: 6558, nombre: "Audifono", precio: 2000 },
  { codigo: 9898, nombre: "Celular", precio: 7000 },
  { codigo: 4503, nombre: "Celular", precio: 3500 },
  { codigo: 1202, nombre: "laptop", precio: 5000 },
];

// // Reduce entrega resultado

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.table(resultado);

// // ESTA LA MEJOR OPCION PARA FILTRAR DATOS, DEVUELVE RESULTADO CON SUS ATRIBUTOS
// resultado=carrito.filter(function(producto){

//         return producto.precio < 5000
//     })
// //fORMA CORTA
// resultado=carrito.filter((producto)=>producto.nombre === 'Celular');
// console.table(resultado)

// resultado=carrito.filter((producto)=>producto.nombre !== 'Celular');
// console.table(resultado)

// resultado=carrito.reduce(function(total, producto){

//     return total + producto.precio
// },0)
// console.table(resultado)

// Buscar un elemento con some verdad o falso

// resultado=carrito.some(function(producto){
//     return producto.nombre==='Celular'
// });

// Buscar un elemento con some verdad o falso mas reducido
// resultado=carrito.some(producto => producto.nombre ==='Celular');
//     console.table(resultado)

// const nuevoarreglo=[
//     {codig:8798, nombr:'Garrafa de aceite'},
//     {codig: 9964, nombr:'Arroz Colfiltes'}
// ];

// nuevoarreglo.forEach(function(a){
//     console.table(a)
// })

// // Unir dos objetos

// const NuevoP={...carrito, ...nuevoarreglo};

// console.table(carrito);
// console.table(NuevoP);

// carrito.forEach(function(carrito1){
//     console.table(carrito1)
// })

// agregar objetos

// carrito.nombre= 'Computador'
// console.log(carrito)

// resultado=carrito.some(function(producto){
//     return producto.nombre==='Celular',
//     console.table(resultado);
// });

// //Arreglos

// const arreglo29=[1,2,3,4,5,6,7,89,654, const arreglo30{23,56,87,35,68,98,94,57,65,54}];
// console.table(arreglo29)

// // DECLARACION DE FUNCIONES
// sumar();
// function sumar(){
//     console.log(10 + 10)
// };

// // EXPRESION DE LA FUNCION

// const sumar2=function(){
//     console.log(9+9);
// }
// sumar2();

// // FUNCIONES IIFE
// (function(){
//     console.log("Esto es funciones IIFE no necesitan llamado porque se autollaman ellas mismas");
// })();

// const num1=98
// const num2="35";

// console.log(parseInt(num2)); //parseInt es una función
// console.log(num1.toString()); //toString es un método porque lleva punto.

// FUNCIONES CON PARÁMETROS

// sumar(100,95);
// function sumar(NUM1,NUM2){  //Estos son los parámetros de la función
//     console.log(NUM1+ NUM2)
// };
// sumar(12300,95); // Estos son los argumentos de la función
// sumar(100,9500);
// sumar(200,905);
// sumar(100,950);

// PARAMETROS POR DEFAULT SE AGREGA CERO POR SI ACASO LOS VALORES DE ARGUMENTOS NO ESTEN
// function sumar(NUM1=0,NUM2=0){  //Estos son los parámetros de la función
//         console.log(NUM1+ NUM2)
//     };
//     sumar(12300,95); // Estos son los argumentos de la función
//     sumar();
//     sumar(15);
//     sumar(150,1548);

// FUNCIONES QUE RETOMAN VALORES
// function sumar(num1=0,num2=0){  //Estos son los parámetros de la función
//     return (num1 + num2)
// };
// let resultado=sumar(10+90);
// console.log(resultado);

// let total=0
// function agregarCarrito(precio){
// return total+=precio;
// }

// total=agregarCarrito(200)
// total=agregarCarrito(900)
// total=agregarCarrito(500)
// total=agregarCarrito(100)
// total=agregarCarrito(20)
// console.log(total)

// function calcularImpuesto(total){
// return 0.15*total;
// }
// let PagarImpuesto=calcularImpuesto(total);

// console.log(PagarImpuesto.toFixed(0));

// console.log('Total Valor con Impuestos: ',(total+PagarImpuesto).toFixed(0));

// METODOS DE PROPIEDADES

// const reproductor={
//     reproducir:function(id){
//         console.log(`Reproduciendo canción ID:${id}`); // para utilizar id se utilizan las tildes, de otra manera no sale
//     },
//     pausar:function(id){
//         console.log(`Pausado canción ID: ${id}`)
//     },
//     crearPlayList:function(nombre){
//         console.log(`Creando Play List: ${nombre}`)
//     },
//     ReproducirPlayList:function(nombre){
//     console.log(`Reproduciendo la PLay List: ${nombre}`)
//     }
// }
// let id=9777
// reproductor.reproducir(id);
// reproductor.pausar(id);

// reproductor.borrarcancion=function(id){
//     console.log(`Eliminando Canción ${id}`)
// }

// reproductor.borrarcancion(3564)
// reproductor.crearPlayList('Serenidad')
// reproductor.ReproducirPlayList('Serenidad')

// ARRAY FUNCTION => ESTE SIMBOLO SUSTITUYE EL FUNCTION
//fORMA CORTA

//     resultado=carrito.filter((producto)=>producto.nombre === 'Celular');
//     console.table(resultado)

//     resultado=carrito.filter((producto)=>producto.nombre !== 'Celular');
//     console.table(resultado);

// resultado=carrito.reduce((total, producto)=> (total + producto.precio),0)
// console.table(resultado)

// // Buscar un elemento con some verdad o falso

// resultado=carrito.some(producto=>producto.nombre==='Celular');
// console.table(resultado)
// // Buscar un elemento con some verdad o falso mas reducido
// resultado=carrito.some(producto => producto.nombre ==='Celular');
//     console.table(resultado)

// ESTRUCTURA DE CONTROL
