// 03/04/2024

const readlineSync = require(`readline-sync`)

const frase = readlineSync.question ("Escreva uma frase")

/// considera letra maiuscula


console.log(frase.toUpperCase())
console.log(frase.replaceAll('o','i'))

console.log(frase.length)


