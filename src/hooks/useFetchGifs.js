import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  
  // primer parametro funcion a ejecutar
  // segundo parametro un arreglo de dependencias vacio
  // se dispara cuando el componente es renderizado por primera vez
  // los efectos no pueden ser asincronos
  useEffect( () => {

    getGifs( category )
      .then( imgs => {

        setTimeout(() => {

          setState({
            data: imgs,
            loading: false
          });

        }, 1000);

      } )
  }, [ category ]);

  return state; 
  //el state es la data
  // y loading en true
}