function setup() {
  bg = loadImage('bgnight_resized.jpg');
  createCanvas(750, 500);
  soundtrack.loop();
  soundtrack.setVolume(0.2);
}

function draw() {
  background(bg);
  mostraEstrela();
  movimentoEstrela();
  verificaColisaoBordas();
  mostraNuvemAliada(xNuvemAliada, yNuvemAliada);
  movimentaNuvemAliada();
  verificaColisaoBordasNuvem();
  estrelaNaoFicaPresa();
  mostraNuvemOponente(xNuvemOponente, yNuvemOponente);
  verificaColisaoBordasNuvemOponente();
  movimentaNuvemOponente();
  incluiplacar();
  marcaPonto();
  titutoStarPong(); 
}

function preload() {
  starborn = font('Starborn.otf');
}