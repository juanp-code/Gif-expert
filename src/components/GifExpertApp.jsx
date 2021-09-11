import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

const GifExpertApp = () => {
  const categories = ["Bleach", "Dragon Ball Z", "Naruto"];
  const [categorie, setCategorie] = useState(categories);

  const handleAddCategorie = () => {
    const newCategorie = "Samurai X";
    setCategorie([...categories, newCategorie])
  }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory categories={setCategorie} />
      <hr />
      <button type="button" onClick={handleAddCategorie}>Agregar</button>
      <ol>
        {categorie.map(category =>
          <li key={category}>{category}</li>
        )}
      </ol>
    </div>
  )
}

export default GifExpertApp;
