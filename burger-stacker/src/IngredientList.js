//import React, { Component} from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
  let allIngredients = props.ingredients.map((ing, i) => (
    // this produces list items
    <li key={i}>
      <Ingredient 
        ingredient={ing}
        itemKey={i}
        clickFunc={props.add} 
        />
    </li>
  ))
  return (
    <section className='pane'>
      <h3>Ingredient List</h3>
      <ul>
      { allIngredients }
      </ul>
    </section>
  )
}

export default IngredientList