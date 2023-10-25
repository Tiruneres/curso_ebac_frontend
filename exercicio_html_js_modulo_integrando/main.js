const form = document.getElementById('form-numero');
let EValido = false
const ValorB = document.getElementById('valor-b');
const ValorA = document.getElementById('valor-a');

    function ValidaNumeros (numeroB, numeroA) {
        return numeroB > numeroA;
    }


form.addEventListener ('submit',function(e){
    
    e.preventDefault();

    
    let MensagemSucesso = `Este formulario é <b> válido </b>, pois o <b>${ValorB.value}</b> é maior que o <b>${ValorA.value}</b>!`
    let MensagemError = `Este formulario é <b> inválido </b>, pois o <b>${ValorB.value}</b> é menor que o <b>${ValorA.value}</b>!`
    EValido =  ValidaNumeros (ValorB.value, ValorA.value);

    if (EValido == true) {
        const ContainerMensagemSucesso = document.getElementById('sucess-message');
        ContainerMensagemSucesso.innerHTML = MensagemSucesso; 
        ContainerMensagemSucesso.style.display = 'block'; 

        const ContainerMensagemError = document.getElementById('error-message');
        ContainerMensagemError.innerHTML = MensagemError; 
        ContainerMensagemError.style = 'none';
        ValorB.classList.remove('error');
        ValorA.classList.remove('error');



        ValorB.value = '';
        ValorA.value = '';

    } else {
        const ContainerMensagemError = document.getElementById('error-message');
        ContainerMensagemError.innerHTML = MensagemError; 
        ContainerMensagemError.style.display = 'block';
        ValorB.classList.add('error');
        ValorA.classList.add('error');


        const ContainerMensagemSucesso = document.getElementById('sucess-message');
        ContainerMensagemSucesso.innerHTML = MensagemSucesso; 
        ContainerMensagemSucesso.style = 'none'; 


        ValorB.value = '';
        ValorA.value = '';
    }

})
