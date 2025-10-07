import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = ({setlistadoState}) => {

    const titulo = "Añadir pelicula";

    const [peliState, setpeliState]   = useState({
      titulo: '',
      descripcion: ''

    });

    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target.value;
        let titulo = e.target.titulo.value;
        let descripcion = e.target.descripcion.value;

        //Crear objeto de la pelicula a guardar
        let peli = {
          id: new Date().getTime(),
          titulo,
          descripcion
        };
        
        //Guardar estado
        setpeliState(peli);

        //Actualizar el estado del listado principal 
        setlistadoState (elementos => {
          return [...elementos, peli];
        })

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);
        GuardarEnStorage("copia_datos", peli);

        


        
    }

    




        
    


    

    
 return (
    <div className="add">
                <h3 className="title">{titulo}</h3>
                
                {peliState.titulo}
                <form onSubmit={conseguirDatosForm}> 
                    <input type="text" 
                    id="titulo" 
                    name="titulo"
                    placeholder="Titulo" />
                    
                    <textarea id="descripcion" 
                    
                    placeholder="Descripción"> </textarea>

                    <input type="submit" 
                    id="save" 
                    value="Guardar" />
                </form>
            </div>
  )
}



