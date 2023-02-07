// displays individual ingredients
//import React, { Component } from "react";

// recieves one ingredient as a prop, displays said ing
const Ingredient = (props) => {
  const { name, color } = props.ingredient
  
  return (
    <p  style={{backgroundColor: color}}
        id={props.itemKey}
        onClick={props.clickFunc}
    >
      {name}
    </p>
  )
}

export default Ingredient