
/// 04/04/2024


const personagem = ['ROG', 'ANG', 'WIL', 'LUC']

function quemSou(personagem) {
    const numAleat = Math.floor(Math.random() * personagem.length)
    return personagem [ numAleat]

}

const personagemEscolhido = quemSou(personagem)
console.log('vc é', personagemEscolhido)







