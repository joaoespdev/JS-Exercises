const mochilaJoao = [
    'carteira',
    'identidade',
    'caderno',
    'estojo',
    'carregador',
    'garrafa térmica'
]

for (let index = 0; index < mochilaJoao.length; index++) {
    console.log(`${index+1}. ${mochilaJoao[index]}`)
    if (mochilaJoao[index] == 'carregador') break;
}