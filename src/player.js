class Player {
constructor (){
    this.row= 0;
    this.col= 0;
    this.image;
}

preloadPlayer(){
   
}
setupPlayer(){

}

drawPlayer(){
    image(this.image, this.col, this.row, 100, 100);
}

moveUp(){
    
    this.row -= 100;
}

moveDown(){
        this.row += 100;
}
moveLeft(){

        this.col -= 100;

}
moveRight(){
        this.col += 100;
}
}