import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';


export const Listado = ({listadoState, setlistadoState}) => {

//const [listadoState, setlistadoState] = useState([]);

const [editar, setEditar] = useState(0);

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
let pelis_almacenadas = conseguirPeliculas(); //Ejecuta la funcion conseguirPeliculas();

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

                <button className="edit" onClick={ () => {
                  setEditar(peli.id)
                }}>Editar</button>
                <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

               {/*aparece formulario editar*/}
               {editar == peli.id && (

                <Editar peli = {peli} 
                conseguirPeliculas = {conseguirPeliculas}
                setEditar= {setEditar}
                setlistadoState={setlistadoState}

                />
                
               )}

            </article>

      );

    })

    : <h2>No hay peliculas para mostrar</h2>

  }


       </>
  )

}


