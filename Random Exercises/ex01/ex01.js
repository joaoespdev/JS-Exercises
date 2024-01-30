var nota = parseInt(prompt('Digite uma nota de 1 a 10:'))
while (nota < 0 || nota > 10 || isNaN(nota)) {
    window.alert('[ERRO] Você precisa digitar uma nota válida.')
    nota = parseInt(prompt('Digite novamente:'))
} 
if (nota >= 0 && nota <=10) {
    window.alert('Sua nota foi armazenada com sucesso!')
}

//isNan vai checar se o usuário digitou alguma coisa que não seja um número, então, se o usuário não digitar nada ou digitar alguma letra, o programa dará como inválido e irá pedir para inserir a informação novamente.
