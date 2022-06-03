import React from 'react'
import './index.css'
import useForm from '../../utils/problema3/useForm';
import validate from '../../utils/problema3/validateInfo';

function Problema_3() {

  const { handleChange, handleSubmit, values, errors } = useForm(
    validate
  );

  return (
    <div className="container">
      <h1>Problema 3</h1>
        <form onSubmit={handleSubmit} className="form_container">
            <input 
              type="password" 
              className="pass_input"
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange} 
            />
            {errors.password && <p>{errors.password}</p>}
            <button type="submit" className="pass_btn">Ingresar</button>
        </form>
    </div>
  )
}

export default Problema_3