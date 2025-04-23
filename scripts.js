let body = document.querySelector ("body")
let tenis = document.querySelector (".imagens-tenis")

function mudarVisual(cor, imagem) {

    body.styles.background = cor
    tenis.src = imagem
}
