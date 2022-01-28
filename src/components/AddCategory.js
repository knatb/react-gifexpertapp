import React, { useState } from 'react'
import PropTypes from 'prop-types';


// se recibe como props la funcion para agregar una categoria
export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // condicion para agregar categoria y limpiar input
    if(inputValue.trim().length > 2 ) {
      setCategories( categories => [inputValue, ...categories]);
      setInputValue('');
    }
  }

  return (
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          value = { inputValue }
          onChange={ handleInputChange }
          placeholder= 'Buscar...'
        />
      </form>
  )
}

// Exigiendo los props, en este caso la funcion set
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
