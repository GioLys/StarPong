function mostraNuvemAliada(xNuvemAliada, yNuvemAliada) {
  fill(250)
  noStroke();
  ellipse(xNuvemAliada, yNuvemAliada -10, larguraElipse, comprimentoElipse);
  ellipse(xNuvemAliada +10, yNuvemAliada + 10, larguraElipse, comprimentoElipse);
  ellipse(xNuvemAliada, yNuvemAliada +25, larguraElipse, comprimentoElipse);
}

function movimentaNuvemAliada(){
  if (keyIsDown(UP_ARROW)) { 
  yNuvemAliada -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
  yNuvemAliada += 10;
  }
}

function verificaColisaoBordasNuvem(){
    
    let colidiu = colisaoEstrelaNuvem(xEstrela, yEstrela, raio, xNuvemAliada, yNuvemAliada, raioMedio);
    
    if (colidiu){
    velocidadexEstrela *= -1;
  }
  
  if (colidiu){
    velocidadeyEstrela *= -1;
  }
}

function colisaoEstrelaNuvem(xEstrela, yEstela, raio, xNuvemAliada, yNuvemAliada, raioMedio)
{
    return dist(xEstrela, yEstela, xNuvemAliada, yNuvemAliada) <= raio + raioMedio;    
}

function estrelaNaoFicaPresa(){
    if (xEstrela - raio < 0){
    xEstrela = 25
    }
}

function mostraNuvemOponente(xNuvemOponente, yNuvemOponente) {
  fill(250)
  noStroke();
  ellipse(xNuvemOponente, yNuvemOponente +10, larguraElipse, comprimentoElipse);
  ellipse(xNuvemOponente - 10, yNuvemOponente - 10, larguraElipse, comprimentoElipse);
  ellipse(xNuvemOponente, yNuvemOponente - 25, larguraElipse, comprimentoElipse);
}

function verificaColisaoBordasNuvemOponente(){
    
    let colidiu = colisaoEstrelaNuvem(xEstrela, yEstrela, raio, xNuvemOponente, yNuvemOponente, raioMedio);
    
    if (colidiu){
    velocidadexEstrela *= -1;
  }
  
  if (colidiu){
    velocidadeyEstrela *= -1;
  }
}

function colisaoEstrelaNuvem(xEstrela, yEstela, raio, xNuvemOponente, yNuvemOponente, raioMedio)
{
    return dist(xEstrela, yEstela, xNuvemOponente, yNuvemOponente) <= raio + raioMedio;    
}

function movimentaNuvemOponente(){ 
 velocidadeYNuvemOponente = yEstrela -yNuvemOponente - comprimentoElipse / 3;
  yNuvemOponente += velocidadeYNuvemOponente
}