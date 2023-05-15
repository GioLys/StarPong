function formatoEstrela(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mostraEstrela(){
  push();
  fill(255,255,0);
  strokeWeight(3);
  stroke(255,215,0);
  translate(xEstrela, yEstrela);
  rotate(frameCount / 50.0);
  formatoEstrela(0, 0, 12, 25, 5);
  pop();
}

function movimentoEstrela(){
     xEstrela += velocidadexEstrela;
     yEstrela += velocidadeyEstrela;
}

function verificaColisaoBordas(){
    if (xEstrela + raio > width || xEstrela - raio < 0){
    velocidadexEstrela *= -1;
  }
  
  if (yEstrela + raio > height || yEstrela - raio < 0){
    velocidadeyEstrela *= -1;
  }
  }  