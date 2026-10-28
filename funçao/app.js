
function validarSenha(senha) {
    return senha.length >= 6 && senha.length <= 12;
}

function validarEmail(email) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
}

function validarUsuario(email, senha) {
    return validarEmail(email) && validarSenha(senha);
}

function podeCadastrar(email, senha) {
    return validarUsuario(email, senha);
}

// Testes de validação
console.log("Senha válida:", validarSenha("12345678"));
console.log("Senha curta:", validarSenha("123"));

console.log("Email válido:", validarEmail("keli@gmail.com"));
console.log("Email inválido:", validarEmail("emailsemarroba"));

console.log("Usuário válido:", validarUsuario("keli@gmail.com", "123456"));
console.log("Usuário inválido:", validarUsuario("", "123456"));
console.log("Cadastro liberado:", podeCadastrar("keli@gmail.com", "123456"));
console.log("Cadastro bloqueado:", podeCadastrar("keli@gmail.com", "123"));

// Percorrendo um array
const numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Somando os valores do array
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Soma:", soma);
