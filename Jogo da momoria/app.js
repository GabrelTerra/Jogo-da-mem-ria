let primeiraCarta, segundaCarta;
let bloqueioVirarCartao = false;
let pontos = 0; // Variável para contagem de pontos

function atualizaPontos() {
    document.getElementById('pontos').textContent = `Pontos: ${pontos}`;
}

function criaCartao(src, alt) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao_conteudo">
            <div class="cartao_conteudo_pergunta">
                <img src="img/verso.jpg" alt="Verso do cartão" class="verso">
            </div>
            <div class="cartao_conteudo_resposta">
                <img src="${src}" alt="${alt}" class="frente">
            </div>
        </div>
    `;

    cartao.addEventListener('click', () => viraCartao(cartao));
    container.appendChild(cartao);
}

function viraCartao(cartao) {
    if (bloqueioVirarCartao || cartao === primeiraCarta) return;

    cartao.classList.add('active');

    if (!primeiraCarta) {
        primeiraCarta = cartao;
    } else {
        segundaCarta = cartao;
        verificarPar();
    }
}

function verificarPar() {
    bloqueioVirarCartao = true;

    let primeiraImagem = primeiraCarta.querySelector('.frente').src;
    let segundaImagem = segundaCarta.querySelector('.frente').src;

    if (primeiraImagem === segundaImagem) {
        pontos += 10; // Adiciona 10 pontos por par encontrado
        atualizaPontos(); // Atualiza o contador de pontos
        primeiraCarta = null;
        segundaCarta = null;
        bloqueioVirarCartao = false;
    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove('active');
            segundaCarta.classList.remove('active');
            primeiraCarta = null;
            segundaCarta = null;
            bloqueioVirarCartao = false;
        }, 1000);
    }
}

function inicializarJogo() {
    // Reinicia os pontos
    pontos = 0;
    atualizaPontos();

    // Limpa o container de cartões
    document.getElementById('container').innerHTML = '';
    primeiraCarta = null;
    segundaCarta = null;
    bloqueioVirarCartao = false;
    
    // Recria os cartões
    pares.forEach(({ src, alt }) => {
        criaCartao(src, alt);
    });
}

// Adiciona o evento ao botão de recomeçar
document.getElementById('recomecar').addEventListener('click', inicializarJogo);

// Inicializa o jogo ao carregar a página
inicializarJogo();
