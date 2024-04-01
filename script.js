const inputEnviar = document.getElementById('inputContinue');
inputEnviar.addEventListener('click',(event) => {
    event.preventDefault();
    
    const inputNome = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputCelular = document.getElementById('celular');
    const inputUsername = document.getElementById('username');
    const inputSenha = document.getElementById('password');
    const inputConfirmarSenha = document.getElementById('confirmPassword');

    if(inputNome.value === '' || inputEmail.value === '' || inputCelular.value === '' || inputUsername.value === '' || inputSenha.value === '' || inputConfirmarSenha.value === ''){
        alert('Todos os campos devem ser preenchidos');
    } else if(inputSenha.value !== inputConfirmarSenha.value){
        alert('Os campos Senha e Confirme sua senha devem ser iguais');
    } else{
        window.open(`./usuarios.html?nome=${inputNome.value}&email=${inputEmail.value}`);
        inputNome.value = '';
        inputEmail.value = '';
        inputCelular.value = '';
        inputUsername.value = '';
        inputSenha.value = '';
        inputConfirmarSenha.value = '';
    }


})

