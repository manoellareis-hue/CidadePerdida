// Seleciona todos os botões de próximo e voltar
const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesVoltar = document.querySelectorAll('.btn-voltar');

// Lógica para avançar de passo
botoesProximo.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        if (atual) {
            atual.classList.remove('ativo');
        }
        
        const proximoPasso = document.getElementById(proximoPassoId);
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});

// Lógica para voltar de passo
botoesVoltar.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const passoAnteriorId = 'passo-' + this.getAttribute('data-voltar');
        
        if (atual) {
            atual.classList.remove('ativo');
        }
        
        const passoAnterior = document.getElementById(passoAnteriorId);
        if (passoAnterior) {
            passoAnterior.classList.add('ativo');
        }
    });
});