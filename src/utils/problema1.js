import { useState } from "react"

const Problema1Utils = () => {
    const [producto, setProducto] = useState("")
    const [x, setX] = useState('x')
    const [y, setY] = useState('y')
    const setearX = (e) => {
      setX(e.target.value)
    }
    const setearY = (e) => {
      setY(e.target.value)
    }
    
    const result = x / (1 / y);
    
    const multiplicar = () => {
      if (y == 0) {
        setProducto("0")
      } else if (!result) {
        setProducto("Por favor, ingrese numeros unicamente ")
      } else {
        setProducto(result)
      }
    }

    return {producto, x, y, result, setearX, setearY, multiplicar}
}

export default Problema1Utils;