import React, {Component} from 'react';
import Board from './Board';

class TicTacToe extends Component {
    
    constructor(props) {
        
        super(props)
    
        this.state = {
            cells: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
        }
        this.changeCells = this.changeCells.bind(this);
    }

    changeCells(cells) {
        this.setState({cells})
    }
  
    render() {
        return (
    	    <div className="game">
                <div className="game-board">
                    <Board
                        cells={this.state.cells}
                        changeCells={this.changeCells}
                    />
                </div>
            </div>
        )
    }
}

export default TicTacToe;