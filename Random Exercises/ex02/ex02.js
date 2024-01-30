function logar() {
    var user = window.document.getElementById('user').value
    var passKey = window.document.getElementById('key').value
    while (user === passKey) {
        window.alert('[ERROR] O usuário e a senha não podem ser iguais! Tente novamente.')
        return; // Utilizado para sair da condição, então ele só testará novamente quando a função "logar()" for acionada pelo botão.
    }    
}