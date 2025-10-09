import React, { useEffect, useState } from 'react'


export const Listado = () => {

const [listadoState, setlistadoState] = useState([]);

useEffect(() => {
  //conseguirPeliculas();

}, []);







  
  return (
    <>
    {listadoState.map(peli => {

      return (
        <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">victorroblesweb.es</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

      );

    })}


    

            
    </>
  )
}
