import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>

      <h2>GifExpertApp</h2>
      {/* requiere enviar la funcion de set por default */}
      <AddCategory setCategories={ setCategories }/>
      <hr />
      
      <ol className='container'>
        {
          categories.map( category => ( 
            // key - ID unico del elemento
            <GifGrid 
              key={ category }
              category={ category } 
            />
          ))
        }
      </ol>
    </>
  )
}
