import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ categories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      categories(item => [inputValue, ...item]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  categories: PropTypes.func.isRequired
}

