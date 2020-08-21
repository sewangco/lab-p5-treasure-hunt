class Game {
   // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
drawGrid() {
for (let i = 0; i <= width; i += width / 10) {
  for (var y = 0; y <= height; y += height / 10) {
          stroke(0);
          strokeWeight(1);
          line(i, 0, i, width);
          line(0, y, width, y);
      }
    }
  }

preloadGame(){
  console.log('game preload')
  this.playerImage= loadImage('/assets/character-down.png');
  this.treasureImage= loadImage('/assets/treasure.png');

}

setUpGame (){
  this.player = new Player(); 
  this.player.image = this.playerImage;
  this.treasure = new Treasure();
  this.treasure.image= this.treasureImage;
}


drawGame(){
  this.player.drawPlayer()
  this.treasure.drawTre
}


}
