import React, { useEffect, useState } from 'react'


export const Listado = ({listadoState, setlistadoState}) => {

//const [listadoState, setlistadoState] = useState([]);

useEffect(() => {
  conseguirPeliculas();

}, []);

const conseguirPeliculas = () => {
  let peliculas = JSON.parse(localStorage.getItem("pelis"));

  setlistadoState(peliculas);

  return peliculas;
}

const borrarPeli = (id) => {
//Conseguir las peliculas almacenadas 
let pelis_almacenadas = conseguirPeliculas();

//Filtrar esas peliculas para que elimine del array la que no quiero
let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !==parseInt(id));

//Actualizar estado del listado 
setlistadoState(nuevo_array_peliculas);

//Actualizar los datos en el localStorage 
localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
}



return (
    <>
    {listadoState != null ?
    listadoState.map(peli => {

      return (
        <article key ={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button className="edit">Editar</button>
                <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>
            </article>

      );

    })

    : <h2>No hay peliculas para mostrar</h2>

  }


       </>
  )

}



