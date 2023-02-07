import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
// need to get rid of class syntax, in lieu of const decloration
// look thru component and get rid of any of these:
  // any use of the word 'this'
  // and use of setState
const BurgerStacker = () => {
  const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]
  const [burgerIngredients, setBurgerIngredients] = useState ([]) 
  

  // function adds items to burgerIngredients array in state
  const addToStack = (e) => {
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor

    console.log(`clicked on ${ingName} and it is ${ingColor}`)

    setBurgerIngredients(
      [{ name: ingName, color: ingColor }, ...burgerIngredients]
    )
  }

  // function to remove individual items from burger
  const removeFromStack = (e) => {
    const clickIndex = e.target.id
    const currBurger = burgerIngredients.slice()
    currBurger.splice(clickIndex, 1)
    setBurgerIngredients(currBurger)
  }

  const clearBurger = () => {
    setBurgerIngredients([])
  }

// rid of render, return only one thing
  return (
    <div>
      <h1>Burger Stacker</h1>
      <div className='panes'>
        <IngredientList
          ingredients={ingredients}
          add={addToStack} 
          />
        <BurgerPane 
          ingredients={burgerIngredients}
          clear={clearBurger}
          remove={removeFromStack}
          />
      </div>
    </div>
  )
}

export default BurgerStacker