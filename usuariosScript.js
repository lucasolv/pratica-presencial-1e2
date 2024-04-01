document.addEventListener("DOMContentLoaded",() => {
    let dados = JSON.parse(localStorage.getItem('dados')) || [];

    const dadosUrl = new URLSearchParams(window.location.search);

    const nomeUsuario = dadosUrl.get('nome');
    const emailUsuario = dadosUrl.get('email');
    let nomeIgual = false;
    let emailIgual = false;
    let naoCadastrar = false;

    dados.map((item) => {
        if(item.nomeUsuario === nomeUsuario){
            nomeIgual = true;
        }
        if(item.emailUsuario === emailUsuario){
            emailIgual = true;
        }
        if(emailIgual && nomeIgual){
            naoCadastrar = true;
        }
        });

    if(nomeUsuario && emailUsuario){
        const dadosUsuario = {nomeUsuario,emailUsuario};

        if(naoCadastrar === false){
            dados.push(dadosUsuario);    
            localStorage.setItem('dados',JSON.stringify(dados));
        }

    }
    const listaUsuarios = document.getElementById('usersList');

    dados.forEach(dado => {
        const novaLi = document.createElement('li');
        novaLi.innerText = `${dado.nomeUsuario} - ${dado.emailUsuario}`;
        listaUsuarios.appendChild(novaLi);
    });

})