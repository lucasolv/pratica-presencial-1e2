const inputNome = document.getElementById('name');

const inputEnviar = document.getElementById('inputContinue');
inputEnviar.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(inputNome.value);
})

