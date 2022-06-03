import React, { useEffect, useState } from "react";
import Problema_1 from "../problemas/Problema1";
import Problema_2 from "../problemas/Problema2";
import Problema_3 from "../problemas/Problema3";
import Problema1Utils from "../utils/problema1";
import Problema2Utils from "../utils/problema2";

function App() {

  const {producto, x, y, result, setearX, setearY, multiplicar} = Problema1Utils();
  const {pokemonsCount, typesArray, type, handleChange, submitForm, pokemonsPerType, pokemon} = Problema2Utils()

  return (
    <>
      <Problema_1
        setearX={setearX}
        setearY={setearY}
        producto={producto}
        multiplicar={multiplicar}
      />
      <Problema_2
        types={typesArray}
        handleChange={handleChange}
        submitForm={submitForm}
        type={type}
        pokemonsCount={pokemonsCount}
        pokemonsPerType={pokemonsPerType}
      />
      <Problema_3/>
    </>
  );
}

export default App;
