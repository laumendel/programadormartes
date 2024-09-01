// const nombre = "Laura";
// const edad = 38;

// console.log("Mi nombre es" + " " + nombre + "." + " " + "Tengo" + " " + edad + " " + "años" + ".")
// document.write(`Mi nombre es ${nombre}. Tengo ${edad} años.`)

// const nombre = prompt('Ingrese su nombre: ', ' ')
// const edad = prompt('Ingrese su edad: ', ' ')

// document.write(`Hola ${nombre}, asi que tienes ${edad} años.`)

// const valor1 = prompt('Ingrese el primer numero:', '');
// const valor2 = prompt('Ingrese el segundo numero:', '');

// const suma = parseInt(valor1) + parseInt(valor2);
// const producto = valor1 * valor2;

// document.write(`La suma es ${suma} y el producto es ${producto}.`)

// const frutas = ["Manzana", "Banana", "Pera", "Sandia"];
// console.log(frutas) 
// console.log(frutas.length)
// const primero = frutas[3]
// const ultimo = frutas[frutas.length - 1]
// console.log(ultimo)

// const vegetales = ["Repollo", "Nabo", "Rabano", "Zanahoria"];
// let seleccionado = 2
// console.log(vegetales[seleccionado]);
// seleccionado = 1
// console.log(vegetales[seleccionado]);
// for( let i = 0; i < vegetales.length; i++) {console.log('Tenemos ' + vegetales )}

// const num1 = parseInt(prompt('Ingrese el primer numero:', ''));
// const num2 = parseInt(prompt('Ingrese el segundo numero:', ''));
// const num3 = parseInt(prompt('Ingrese el tercer numero:', ''));

// if (num1 > num2 && num1 > num3) {
//     document.write(`el mayor es el ${num1}`);
// } else if (num2 > num3) {
//     document.write(`el mayor es el ${num2}`);
// } else {
//     document.write(`el mayor es el ${num3}`);
// }

// for(let f = 1; f <= 10; f++){
//     console.log(f + " ");  
// }


const distance = 1997

if (distance <= 1000) {
    document.write(`Vaya a pie.`)
}
else if (distance > 1000 && distance < 10000) {
    document.write(`Vaya en bicicleta.`)
}
else if (distance > 10000 && distance < 30000) {
    document.write(`Vaya en colectivo.`)
}
else if (distance > 30000 && distance < 100000) {
    document.write(`Vaya en auto.`)
}
else if (distance > 100000) {
    document.write(`Vaya en avion.`)
}

const numeros = [15, 300, 69, 458];  

let max = numeros[0];
for (let i = 1; i <numeros.length; i++) {
    max = numeros[i];
}
console.log(max);