class Game {
    constructor(thisPlayerIsPlayingAsWhite) {
        this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite;//boolean
        this.chessBoard = this.makeStartingBoard()
    }

    makeStartingBoard() {
        //makes the board orientation for the current player
        if (this.thisPlayerIsPlayingAsWhite) {
            //make chess orientation for white

        } else {
            //make chess orientation for black

        } 
    }

 movePiece(pieceId, to){
    //pieceId: string
    //to: [x, y]
    
 }   
}