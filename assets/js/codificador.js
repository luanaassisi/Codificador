let selecao = document.querySelector('#escolha')
let cahvePasso = document.querySelector('#incremento')

selecao.addEventListener('change', function(){
    if(selecao.value == 'cifra'){
        chavePasso.style.display = 'inline'
    }else{
        chavePasso.style.display = 'none'
    }
})

