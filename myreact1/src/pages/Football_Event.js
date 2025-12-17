import React from 'react'

function Football_Event() {

    const shoot = () => {
    alert("Great Shot!");
  }

//   list _ map
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>
    <br/>
    <button onClick={shoot}>Take the shot!</button>

    {/* list _ map */}
    <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>This is a { car }</li>)}
      </ul>
    </>
  )
}

export default Football_Event