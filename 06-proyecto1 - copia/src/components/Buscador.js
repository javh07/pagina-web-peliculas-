import React, { useState } from 'react'


export const Buscador = (listadoState, setlistadoState) => {

const [busqueda, setBusqueda] = useState('');

const buscarPeli = (e) => {
  //Crear estado y actualizarlo 
  setBusqueda(e.target.value);
  

  //Filtrar para buscar coincidencias 
  let pelis_encontradas = listadoState.filter(peli => {
    return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
  });

  if(busqueda.length <= 1 || pelis_encontradas <= 0){
   pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
  }


  //Actualizar estado del listado principal 
  setlistadoState(pelis_encontradas);
}


  return (
    <div className="search">
                <h3 className="title">Buscador {busqueda}</h3>
                <form>
                     <input type="text" 
                    id="search_field" 
                    name = "busqueda"
                    autoComplete='off'
                    
                    onChange={buscarPeli}

                     />

                    <button id="search">Buscar</button>
                </form>
            </div>
  )
}
