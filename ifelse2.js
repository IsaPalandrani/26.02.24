//a linha a baixo inicía uma funçao chamada verificarlogin
function verificarLogin(){
// na linha de baixo o método getElementById() é usado para selecionar elementos do HTML com os ID "txtlogin" e armazenar esses elementos nas variáveis txtlogin.
    let txtLogin = document.getElementById("txtLogin");
// na linha a baixo o método getElementById() é usado para selecionar elementos do HTML com os ID "txtsenha" e armazenar esses elementos nas variáveis txtsenha.
    let txtSenha = document.getElementById("txtSenha");

//let é uma declaraçaõ da variavel login que está com o valor "teste".
    let login = "teste";
//let é uma declaraçaõ da variavel senha que está com o valor "teste".
    let senha = "teste";

//a linha a baixo está realizando uma verificação de login. if-else para verificar se o valor de texto com o ID "txtlogin" é igual ao valor armazenado na variável login e se a entrada de texto com o ID "txtsenha" é igual ao valor armazenado em uma variável senha.
    if (txtLogin.value == login && txtSenha.value == senha) {
        console.log("Logado com sucesso");
    } else {
        console.log("Login ou senha incorretos! Digite e tente novamente.");
    }
//fechamento
}