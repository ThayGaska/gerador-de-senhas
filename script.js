function gerarSenha(){

    const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    const tamanho =
    document.getElementById("tamanho").value;

    let senha = "";

    for(let i = 0; i < tamanho; i++){
        senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }

    document.getElementById("senha").value = senha;
    document.getElementById("mensagem").textContent = "";
}

function copiarSenha(){

    const senha = document.getElementById("senha");

    senha.select();
    senha.setSelectionRange(0,99999);

    navigator.clipboard.writeText(senha.value);

    document.getElementById("mensagem").textContent =
    "Senha copiada!";
}