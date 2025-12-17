import React from 'react'

function Car_Props(abc) {
    // Destructuring Props 
    const {brand, year} = abc.carinfo; // for object
    const {color, wheels} = abc;
    // const {color, ...rest} = abc; // same but in this way no need to write all, to access use (<p>color: {color}</p> <p>Wheels: {rest.wheels}</p>)
  return (
    <>
    <h1>Car</h1>


    {/* Props receive */}
    <p>Brand: {abc.carinfo.brand}</p> 
    <p>year: {abc.carinfo.year}</p> 
    <p>color: {abc.color}</p>
    <p>Wheels: {abc.wheels}</p> 
    <br/>

    {/* Destructuring Props */}
    <h3>Destructuring Props</h3>
    <p>Brand: {brand}</p> 
    <p>year: {year}</p> 
    <p>color: {color}</p>
    <p>Wheels: {wheels}</p>

    


    </>
  )
}

export default Car_Props