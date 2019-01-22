import React, {Component} from 'react';
import Cell from './Cell';

class Board extends Component {

	constructor(props) {
   	    super(props);
        this.buildCells = this.buildCells.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
        this.checkWiner = this.checkWiner.bind(this);
        this.state = {
            player: 'O'
        }
    }

    changePlayer(player){
        this.setState({player})
    }

    checkWiner() {

        const {cells} = this.props;
        const message = `Player ${this.state.player === 'X' ?  'O ': 'X'} won, play again?`;
        let option = false;
        
        if(cells[0][0] && cells[0][0] === cells[0][1] && cells[0][0] === cells[0][2])
            option = window.confirm(message);
        else if(cells[1][0] && cells[1][0] === cells[1][1] && cells[1][0] === cells[1][2])
            option = window.confirm(message)
        else if(cells[2][0] && cells[2][0] === cells[2][1] && cells[2][0] === cells[2][2])
            option = window.confirm(message)
        else if(cells[0][0] && cells[0][0] === cells[1][0] && cells[0][0] === cells[2][0])
            option = window.confirm(message)
        else if(cells[0][1] && cells[0][1] === cells[1][1] && cells[0][1] === cells[2][1])
            option = window.confirm(message)
        else if(cells[0][2] && cells[0][2] === cells[1][2] && cells[0][2] === cells[2][2])
            option = window.confirm(message)
        else if(cells[0][0] && cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2])
            option = window.confirm(message)
        else if(cells[0][2] && cells[0][2] === cells[1][1] && cells[0][2] === cells[2][0])
            option = window.confirm(message)
        
        if(option){
            this.props.changeCells([
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ]
            )
        }

    }

	buildCells(i,x) {
  	    return i.map((val,index) => (
    	    <Cell 
                className='cell' 
                value={val} 
                key={index} 
                cords={{x,y:index}}
                cells={this.props.cells}
                player={this.state.player}
                changeCells={this.props.changeCells}
                changePlayer={this.changePlayer}
                checkWiner={this.checkWiner}
            />
        ))
    }
  
	render() {
  	    const rows = this.props.cells.map((i,index) => (
    		<div className='row' key={index}>
    	        {this.buildCells(i,index)}
    		</div>
        ))
  	    return (
    	    <div className='container'>{rows}</div>
        )
    }
}

export default Board;