// 03/04/2024


const nome = 'Rogerio F Machado'
const cor = 'Vermelho'
const cidade = 'sap.sul'
let frase = 'hj comi cenoura'

// considera letra minuscula
frase = frase.toLocaleLowerCase()



console.log('cor fav.de ',nome, 'é', cor)

//template string
console.log(`cor fav.de ${nome}, é ${cor}`)

//concatenacao
console.log('cor fav.de ' + nome + ' é ' + cor)

// proppriedade lenght
console.log(nome.length)  //conta qtde de caracteres, incluindo espacos em bco

//  retira espacos na string antes e depois 
console.log(nome.trim())

// metofo includes
console.log(frase.includes("cenoura"))
console.log(frase.includes("batata"))






