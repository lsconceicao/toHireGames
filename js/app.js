function alterarStatus(id){
    // Seleciona o elemento do jogo clicado pelo id
    let clickGame = document.getElementById(`game-${id}`);
    // Seleciona a imagem do jogo
    let imagem = clickGame.querySelector('.dashboard__item__img');
    // Seleciona o botão de ação do jogo
    let botao = clickGame.querySelector('.dashboard__item__button');
    // Seleciona o nome do jogo
    let nomeJogo = clickGame.querySelector('.dashboard__item__name');

    // Verifica se o jogo está alugado
    if(imagem.classList.contains('dashboard__item__img--rented')){
        // Confirma se o usuário deseja devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo: ${nomeJogo.textContent}?`)){
            // Remove a indicação de alugado na imagem
            imagem.classList.remove('dashboard__item__img--rented');
            // Remove a indicação de devolução no botão
            botao.classList.remove('dashboard__item__button--return');
            // Altera o texto do botão para 'Alugar'
            botao.textContent = 'Alugar';
        }
        // Exibe alerta de devolução
        alert(`Você devolveu o jogo: ${nomeJogo.textContent}`);
    } else {
        // Confirma se o usuário deseja alugar o jogo
        if(confirm(`Você tem certeza que deseja alugar o jogo: ${nomeJogo.textContent}?`));
        // Adiciona a indicação de alugado na imagem
        imagem.classList.add('dashboard__item__img--rented');
        // Adiciona a indicação de devolução no botão
        botao.classList.add('dashboard__item__button--return');
        // Altera o texto do botão para 'Devolver'
        botao.textContent = 'Devolver'; 
        // Exibe alerta de aluguel
        alert(`Você alugou o jogo: ${nomeJogo.textContent}`);
    }
    // Atualiza a contagem de jogos alugados
    consultarEContarJogosAlugados();
}


function consultarEContarJogosAlugados(){
    // Exibe no console que a consulta de jogos alugados está iniciando
    console.log('Consultando jogos alugados...');
    // Seleciona todas as imagens dos jogos na dashboard
    let imagens = document.querySelectorAll('.dashboard__item__img');
    // Inicializa o contador de jogos alugados
    let jogosAlugados = 0;
    // Percorre cada imagem encontrada
    imagens.forEach(function(imagem){
        // Verifica se a imagem possui a classe que indica que o jogo está alugado
        if(imagem.classList.contains('dashboard__item__img--rented')){
            // Incrementa o contador de jogos alugados
            jogosAlugados++;
        }
    });
    // Exibe no console o total de jogos alugados encontrados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function testePalindromo(){
    // Solicita ao usuário uma palavra para verificar se é palíndromo
    let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");
    // Inverte a palavra digitada pelo usuário
    let palavraInvertida = palavra.split('').reverse().join('');
    // Compara a palavra original com a invertida
    if(palavra == palavraInvertida){
        // Se forem iguais, exibe alerta informando que é um palíndromo
        alert(`A palavra "${palavra}" é um palíndromo!`);
    } else {
        // Se forem diferentes, exibe alerta informando que não é um palíndromo
        alert(`A palavra "${palavra}" não é um palíndromo.`);
    }
}