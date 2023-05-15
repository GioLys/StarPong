//variaveis do background
let bg;

//variáveis do texto
let starborn;
let starPongTitulo = 'Star Pong'


//variaveis da estrela
let xEstrela = 300;
let yEstrela = 200;
let diametro = 35;
let raio = diametro / 2;

//velocidade da estrela
let velocidadexEstrela = 3;
let velocidadeyEstrela = 3;

//variaveis nuvem aliada
let xNuvemAliada = 20;
let yNuvemAliada = 250;

//variaveis da elipse das nuvens
let larguraElipse = 35;
let comprimentoElipse = 50;
let raioMaior = comprimentoElipse / 2;
let raioMenor = larguraElipse / 2;
let raioMedio = (raioMaior + raioMenor) / 2;

//variaveis nuvem oponente
let xNuvemOponente = 730;
let yNuvemOponente = 250;
let velocidadeYNuvemOponente;

//placar do jogo
let pontosAliado = 0
let pontosOponente = 0

//sons do jogo
let soundtrack;

let colidiu = false;