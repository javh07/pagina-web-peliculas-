export const GuardarEnStorage = (clave, elemento) => {

      //Conseguir los elementos que ya tenemos en Localstorage
      let elementos = JSON.parse(localStorage.getItem(clave));


      //Comprobar si es array
      if (Array.isArray(elementos)){
        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
      }else{
        //Crea un array con el nuevo elemento
        elementos = [elemento];
      }

     

      //Guardar en el localstorage
      localStorage.setItem(clave, JSON.stringify(elementos));

      //Devolver objeto guardado 
      return elemento;


    }
