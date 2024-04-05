const readlineSync = require('readline-sync');

// Fazendo perguntas e armazenando as respostas
const numero = readlineSync.question("inf.um numereo de 0 a 4 ")


const listaDeRacas = ['b.collie', 'pequines', 'pincher', 'labrador', 'SRD']


console.log("Numero: " + numero)


///console.log(listaDeCompras)

///console.log(listaDeNumerosMega)

const opcao = listaDeRacas[numero]

console.log(opcao)

