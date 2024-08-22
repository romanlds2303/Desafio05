let cantidadDeGatos1 =  (prompt("¿Cuántos gatos querés ver?"));
let gatos1 = ['Gato #1: 😺','Gato #2: 😸','Gato #3: 😹','Gato #4: 😺','Gato #5: 😸','Gato #6: 😹','Gato #7: 😺','Gato #8: 😸','Gato #9: 😹','Gato #10: 😺'];

if (cantidadDeGatos1 > 0 && cantidadDeGatos1.length <=10) {
for (let index = 0; index < cantidadDeGatos1 ; index++)
    console.log(gatos1[index]);
}

console.log("===========================");
console.log("===========================");



// // Ejercicio 2

let numeroDeGatos =prompt ("¿Cuántos gatos querés ver?"); 
let numeroDeHuellas =prompt ("¿Cuántas huellas querés ver?"); 

let gato = '🐈'; 
let paso = '🐾'; 

for (let index = 1; index <= numeroDeGatos; index++) {
    let huellas = paso.repeat(numeroDeHuellas) ;
    let gatos = gato.repeat(numeroDeGatos);
    console.log( 'Gato #'+ [index]  +gatos + huellas);
}



console.log("===========================");
console.log("===========================");




// Ejercicio 3


let cantidadDeGatos = prompt("Cantidad de gatos ");
let cantidadDePasos = prompt("Cantidad de huellitas ");

let gatos = ["🐈", "🐈‍⬛"]; 
let huellitas = ["🐾"]


for (let index = 1; index <= cantidadDeGatos; index++) {
    let LosDosGatos = gatos[index % 2]; 
    let huellitas = "🐾".repeat(cantidadDePasos); 
    console.log( 'Gato #'+[index] +LosDosGatos + huellitas);
}


console.log("===========================");
console.log("===========================");

