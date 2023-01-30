const botaoAsh = document.querySelector('#btn_Ash');
const botaoPikachu = document.querySelector('#btn_pikachu');
const botaoCharmander = document.querySelector('#btn_Charmander');

const areaImagens = document.querySelector('.area_imagens');

function criarImagemAsh (){
    const imagemExiste = document.querySelector('.img_personagem')

    if (imagemExiste) {
        areaImagens.removeChild(imagemExiste);
    }

    const imgAsh = document.createElement('img');

    imgAsh.classList.add('img_personagem');
    imgAsh.src = './Ash.png';
    imgAsh.alt = 'Um menino alto usando boné';

    areaImagens.appendChild(imgAsh);
}
function criarImagemPikachu (){
    const imagemExiste = document.querySelector('.img_personagem')

    if (imagemExiste) {
        areaImagens.removeChild(imagemExiste);
    }

    const imgPikachu = document.createElement('img');

    imgPikachu.classList.add('img_personagem');
    imgPikachu.src = './pikachu.png';
    imgPikachu.alt = 'Um mostrinho Amarelo';

    areaImagens.appendChild(imgPikachu);
}
function criarImagemChamander (){
    const imagemExiste = document.querySelector('.img_personagem')

    if (imagemExiste) {
        areaImagens.removeChild(imagemExiste);
    }

    const imgChamander = document.createElement('img');

    imgChamander.classList.add('img_personagem');
    imgChamander.src = './Chamander.png';
    imgChamander.alt = 'Um mostrinho Amarelo';

    areaImagens.appendChild(imgChamander);
}
botaoAsh.addEventListener('click', criarImagemAsh);
botaoPikachu.addEventListener('click', criarImagemPikachu);
botaoCharmander.addEventListener('click', criarImagemChamander);