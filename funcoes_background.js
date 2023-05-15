function preload() {
  starborn = loadFont('Starborn.otf');
  soundtrack = loadSound('StarryNightOrisinal.mp3');
}

function titutoStarPong(){
  strokeWeight(4);
  stroke(250, 250, 161);
  textFont(starborn);
  textSize(35);
  fill(23, 52, 74);
  text(starPongTitulo, 380, 450);
  
}

