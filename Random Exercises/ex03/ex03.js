nome = window.prompt('Qual o seu nome? (precisa ser maior que 3 caracteres).')
while (nome.length < 4 || !isNaN(nome)) {
    window.alert('Digite um nome válido.')
    nome = window.prompt('Qual o seu nome? (precisa ser maior que 3 caracteres).')
    // Preste atenção no sinal de "!", esse sinal de negação vai mudar a lógica, se "isNan" confere se o valor não é um número, agora vai conferir se for um número, e se for ele passará a mensagem de erro ao usuário.
}
idade = window.prompt('A sua idade? (Entre 0 e 150).')
while (idade < 0 || idade > 150) { // Em idade eu permiti a entrada de texto, caso o usuário queira escrever "dez" ou "dez anos" por exemplo.
    window.alert('Digite uma idade válida.')
    idade = window.prompt('A sua idade? (Entre 0 e 150).')
}
salário = window.prompt('Seu salário? (Maior que 0, somente números por favor).')
while (salário <= 0 || isNaN(salário)) { // isNan vai conferir se o valor para salário não é um número, se não for, ele dará como inválido.
    window.alert('Digite um salário válido.')
    salário = window.prompt('Seu salário? (Maior que 0, somente números por favor).')
}
sexo = window.prompt('Seu sexo biológico? (responda com "f" ou "m").')
while (sexo != "f" && sexo != "m") {
    window.alert('Digite um sexo válido.')
    sexo = window.prompt('Seu sexo biológico? (responda com "f" ou "m").')
}
estcivil = window.prompt('Seu estado civil? (Responda com: s, c, v ou d).')
while (estcivil != "s" && estcivil != "c" && estcivil != "v" && estcivil != "d") {
    window.alert('Digite um estado civil válido.')
    estcivil = window.prompt('Seu estado civil? (Responda com: s, c, v ou d).')
}