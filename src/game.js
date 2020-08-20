class Game {
   // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

preloadGame(){
      this.playerImg= loadImage('/r2 copy.png');
}

setUpGame (){
  this.player = new Player(); 
  this.player.image = this.playerImg;
}

drawGrid() {
for (var x = 0; x <= width; x += width / 10) {
  for (var y = 0; y <= height; y += height / 10) {
          stroke(0);
          strokeWeight(1);
          line(x, 0, x, height);
          line(0, y, width, y);
      }
    }
  }

  drawGame(){
    game.drawGrid()
    this.player.drawPlayer()
}


}
