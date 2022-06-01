import React, { useState } from "react";
import Problema_1 from "../problemas/Problema1/index";
function App() {

  // PROBLEMA 1 - MULTIPLICAR SIN *
  const [producto, setProducto] = useState("")
  const [x, setX] = useState('x')
  const [y, setY] = useState('y')
  const setearX = (e) => {
    setX(e.target.value)
  }
  const setearY = (e) => {
    setY(e.target.value)
  }

  const result = x / ( 1 / y );

  const multiplicar = () => {
    if(result) {
      setProducto(result)
    } else {
      setProducto("Por favor, ingrese numeros unicamente ")
    }
  }
  // PROBLEMA 1

  return (
    <Problema_1 
      setearX={setearX}
      setearY={setearY}
      producto={producto}
      multiplicar={multiplicar}
    />
  );
}

export default App;
