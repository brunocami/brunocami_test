import React from 'react'
import Card from '../../components/Card/index'
import './index.css'

const Problema_2 = ({ handleChange,  types, type, pokemonsCount, submitForm, pokemonsPerType}) => {
   
    return (
        <div className="container">
            <h1>Problema 2</h1>
            <ul className="type_list">
                {types.map(item => (
                    <li className="type_item" key={item.name}>{item.name}</li>
                ))}
            </ul>
            <form onSubmit={submitForm} className="search_container">
                <input type="text" className="search_input" placeholder="EJ: 'electric'" name="search" onChange={handleChange}/>
                <button type="submit" className="btn">Buscar</button>
            </form>
            <div className="type_info">
                {pokemonsCount.length === 0 ? <div></div> : <div className="pokemons_count">se registraron {pokemonsCount.length} pokemones tipo {type.name}</div>}
            </div>
            <Card pokemonsPerType={pokemonsPerType}></Card>
        </div>
    )
}

export default Problema_2