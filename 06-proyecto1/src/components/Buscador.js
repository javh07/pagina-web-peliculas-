import React from 'react'

export const Buscador = () => {
  return (
    <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" 
                    id="search_field" 
                    name = "busqueda"
                    autoComplete='off'
                    value= "Lo que estoy buscando"
                    
                    
                    
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
  )
}
