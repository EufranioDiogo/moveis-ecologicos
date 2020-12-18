let banners = ["Os melhores do Brasil!", "Qualidade e preço baixo!"];
let bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector(’h2#mensagem’).textContent =
    banners[bannerAtual];
}

function color() {
    console.log('Olá mundo');
}

setInterval(trocaBanner, 1000);
