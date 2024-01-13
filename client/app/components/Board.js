import React from 'react'
import Tile from './Tile'
import Strike from '../Strike'

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <div className='board'>
        <Tile onClick={() => onTileClick(0)} playerTurn={playerTurn} values={tiles[0]} className={'right-border bottom-border'}/>
        <Tile onClick={() => onTileClick(1)} playerTurn={playerTurn} values={tiles[1]} className={'right-border bottom-border'}/>
        <Tile onClick={() => onTileClick(2)} playerTurn={playerTurn} values={tiles[2]} className={'bottom-border'}/>
        <Tile onClick={() => onTileClick(3)} playerTurn={playerTurn} values={tiles[3]} className={'right-border bottom-border'}/>
        <Tile onClick={() => onTileClick(4)} playerTurn={playerTurn} values={tiles[4]} className={'right-border bottom-border'}/>
        <Tile onClick={() => onTileClick(5)} playerTurn={playerTurn} values={tiles[5]} className={'bottom-border'}/>
        <Tile onClick={() => onTileClick(6)} playerTurn={playerTurn} values={tiles[6]} className={'right-border'}/>
        <Tile onClick={() => onTileClick(7)} playerTurn={playerTurn} values={tiles[7]} className={'right-border '}/>
        <Tile onClick={() => onTileClick(8)} playerTurn={playerTurn} values={tiles[8]} />
        <Strike strikeClass={strikeClass}/>
    </div>
  )
}

export default Board