import React from 'react'

const Tile = ({ className, values, onClick, playerTurn }) => {
     let hoverClass = null
     if(values == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
        console.log(`${playerTurn.toLowerCase()}-hover`)
     }
     
  
    return (
    <div className={`${className} tile ${hoverClass}`} onClick={onClick}>
        {values}
    </div>
  )
}

export default Tile