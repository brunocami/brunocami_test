import React from 'react'
import './index.css'

function Card({pokemonsPerType}) {

  return (
    <div className="cards_section_container">
        <div className="row">
          {pokemonsPerType.map(item=>(
            <div className="card" >
              <h2>{item}</h2>
              
            </div> 
          ))}
        </div>
    </div>
  )
}

export default Card