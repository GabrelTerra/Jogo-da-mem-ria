const imagens = [
    { src: 'img/frente1.png', alt: 'Imagem 1' },
    { src: 'img/frente2.png', alt: 'Imagem 2' },
    { src: 'img/frente3.png', alt: 'Imagem 3' },
    { src: 'img/frente4.png', alt: 'Imagem 4' },
    { src: 'img/frente5.png', alt: 'Imagem 5' },
    { src: 'img/frente6.png', alt: 'Imagem 5' }
];

let pares = [...imagens, ...imagens].sort(() => Math.random() - 0.5);

pares = pares.slice(0, 12);

pares.forEach(({ src, alt }) => {
    console.log(`Criando cartão para: ${src}`);
    criaCartao(src, alt);
});
