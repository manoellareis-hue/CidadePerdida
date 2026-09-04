// Seleciona todos os botões de voltar
const botoesVoltar = document.querySelectorAll('.btn-voltar');

botoesVoltar.forEach(button => {
    button.addEventListener('click', function() {
        // Identifica o passo visível
        const atual = document.querySelector('.ativo');
        
        // Remove a classe 'ativo' do passo atual (se existir)
        if (atual) {
            atual.classList.remove('ativo');
        }
        
        // Pega o id do passo anterior
        const passoAnterior = 'passo-' + this.getAttribute('data-voltar');
        const elementoAnterior = document.getElementById(passoAnterior);

        // Exibe o passo anterior
        if (elementoAnterior) {
            elementoAnterior.classList.add('ativo');
        }
    });
});