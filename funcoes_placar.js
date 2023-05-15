function incluiplacar(){
  strokeWeight(4);
  stroke(175,238,238);
  textAlign(CENTER);
  textFont(starborn);
  textSize(35);
  fill(color(0,206,209));
  ellipse(127.5, 47, 70, 50);
  fill(255);
  text(pontosAliado, 127.5, 60);
  fill(color(0,206,209));
  ellipse(622.5, 47, 70, 50);
  fill(255);
  text(pontosOponente, 622.5, 60);
}

function marcaPonto(){
  if(xEstrela>732){
    
    pontosAliado += 1;
  }
  if(xEstrela<20){

    pontosOponente += 1;
  }
}