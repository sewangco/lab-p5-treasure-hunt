class Player {
constructor (){
    this.row= 0;
    this.col= 0;
    
}
preloadPlayer(){}

setupPlayer(){}

drawPlayer(){}

moveUp(){
    if (keyIsDown(38)){
        console.log('up')
        this.row += 1;
}
}
moveDown(){
    if (keyIsDown(40)){
        console.log('down')
        this.row -= 1;
    }
}
moveLeft(){
    if (keyIsDown(37)){
        console.log('left')
        this.col += 1;
    }
}
moveRight(){
    if (keyIsDown(39)){
        console.log('right')
        this.col -= 1;
    }
    }
}