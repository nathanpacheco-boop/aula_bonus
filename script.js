function cadastrar () {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value; 

    if(usuario === "" || senha === "") {
        exibirMensagem("Preencha o usuáiro e senha", "erro");
        return;
    }
    if (senha.length < 4) {
        exibirMensagem ("A senha deve ter ao menos 4 caracteres.", "erro");
        return;
    }

    const usuarioExistente = localStorage.getItem("usuario_" + usuario);

    if (usuarioExistente !== nuss) {
        exibirMensagem("esse usuário ja está cadastrado", "erro");
        return;
    }
    localStorage.setItem("usuario_" + uauario, senha);
    exibirmensagem("conta criada com sucesso! Faça login.", "ok");

    function exibirMensagem(texto, tipo) {
        const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto
    mensagem.className = "mensagem" + tipo;
    mensagem.style.display = "block";
    
    }
}