import React, { Component } from 'react';

class Cell extends Component {
    
    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
    }
  
    handleclick() {
        
        const {cords,cells,player,value} = this.props;
        
        if(!value) {
            let newPlayer = (player === 'X') ? 'O' : 'X';
            cells[cords.x][cords.y] = newPlayer;
            this.props.changeCells(cells);
            this.props.changePlayer(newPlayer);
            this.props.checkWiner();
        }

    }

    render() {
        return (
    	    <div className='cell' onClick={this.handleclick}>
                {this.props.value}
            </div>
        );
    }
}

export default Cell;