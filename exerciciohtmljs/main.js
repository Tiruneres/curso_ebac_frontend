
const form = document.getElementById('form') /*colocando na váriavel form a possibilidade de se mecher no id pelo js, de nome form */


function ValidaNome (NomeCompleto){
    const NomeComoArray = NomeCompleto.split(' ')
    return NomeComoArray.length >= 3
}



form.addEventListener('submit', function (e){
    let FormEValido = false
    e.preventDefault()
    

    const NomeBeneficiario = document.getElementById('NomeCompleto')
    FormEValido = ValidaNome (NomeBeneficiario.value)
    if (FormEValido) {
        alert('tudo certo !')
    } else {
        alert('seu nome não está completo')
    }
})

/*  o 'form.' quer dizer = selecionando o elemento ID para fazer algo 

o 'addEventListener' quer dizer = é uma função que adiciona ouvintes para eventos do nosso elemento selecionado que no casso o form

o '('submit'' = é o evento que tem no nosso elemento selecionado que no caso o form

o ', function (e)' = é a função com o parametro '(e)' que será disparada / chamada, quando acontecer o evento de submit no nosso form

o '{
    e.preventDefault()
})' = é a função responsavel por cancelar o reload do nosso formulário, a ação que vai acontecer quando a função ' function (e)' for chamada  
*/


