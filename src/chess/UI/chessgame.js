import React from 'react'
import Game from '../model/chess'
import { Layer } from 'react-konva'
import Piece from './piece'

class ChessGame extends React.Component {
 state = {
   gameState: new Game(this.props.isWhite),
   whiteKingInCheck: false,
   blackKingInCheck: false 
 }

 componentDidMount() {
    WebSocket.on('opponent move', move => {
     if (move.playerColorThatJustMovedIsWhite != this.props.isWhite) {
        this.movePiece(move.move.selectedId, move.finalPosition,this.state.gameState, false)
        this.setState({
            playerTurnToMoveIsWhite: !move.playerColorThatJustMovedIsWhite
        })
     }   
    })
 }

 render() {
    return {

    }
 }

 <React.Fragment>
    <div>
        <Stage>
          <Layer>
            {
                this.state.gameState.getBoard().map((row) =>{
                return (
                        <React.Fragment>
                        {
                            row.map((square) => {
                                return (
                                <Piece
                                x = {square.getCanvasCoord()[0]}
                                y = {square.getCanvasCoord()[1]
                                imgUrls = {piecemap[square.getPiece().name]}
                                isWhite = {square.getPiece().name}
                                >
                                </Piece>
                                )
                                })
                            }
                        }
                        </React.Fragment>
                    )
                })
            }
          </Layer>
        </Stage>
    </div>
 </React.Fragment>

 movePiece(selectedId, finalPosition) {

 }
}

export default ChessGame