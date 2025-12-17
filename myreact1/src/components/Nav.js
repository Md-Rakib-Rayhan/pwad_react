import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/car_props">Car</Link> |{" "}
        <Link to="/football_event">Football_Event</Link>  |{" "}
        <Link to="/form">Form</Link>
    </nav>
  )
}

export default Nav