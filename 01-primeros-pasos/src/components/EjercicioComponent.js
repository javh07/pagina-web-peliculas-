import React, {useState} from 'react'
import propTypes from "prop-types";

export const EjercicioComponent  = ({year}) => {

const [yearNOw, setYearNow]= useState(year);

const siguiente = e =>{
    setYearNow(yearNOw+1);
}

const anterior = e =>{
    let operacion = yearNOw - 1;
    setYearNow(operacion);
}

const cambiarYear = e =>{
    let dato = e.target.value;
    setYearNow(dato);
}
  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label'>
            {yearNOw}
        </strong>
        <p>
            <button onClick={siguiente}>SIGUIENTE</button>
            &nbsp;
            <button onClick={anterior}>ANTERIOR</button>
        </p>

        <p>Cambiar año
        <input 
        onChange={cambiarYear}
        type="text" 
        placeholder='Cambia el año'></input>
        </p>
    </div>


  )
}

EjercicioComponent.propTypes ={
    year: propTypes.number.isRequired
}