import React from 'react'
import './index.css'

const Problema_1 = ({ setearX, setearY, multiplicar, producto }) => {

  return (
    <div className="container">
      <h1>Problema 1</h1>
      <h4>Multiplicar dos variables sin usar el operador *</h4>
      <p>Solucion: "x / (1 / y)"</p>
      <div className="set_container">
        <input type="text" className="input"  onChange={setearX}/>
        <input type="text" className="input"  onChange={setearY}/>
        <button className="btn" onClick={multiplicar}>Multiplicar</button>
      </div>
      <div className="resultado">
        Resultado: {producto}
      </div>
    </div>
  )
}

export default Problema_1