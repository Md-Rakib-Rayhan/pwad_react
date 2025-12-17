import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
// import reportWebVitals from './reportWebVitals';


// Browser Router
import { BrowserRouter, Routes, Route, Link, Form } from 'react-router-dom';
// new
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Nav from './components/Nav';
import Car_Props from './pages/Car_Props';
import Football_Event from './pages/Football_Event';
import My_Form from './pages/My_Form';

 




function App() {

  let wheels = 4;
  let carinfo = {brand:"Odi", year:2023};

 


  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car_props" element={<Car_Props carinfo={carinfo} color="red" wheels={wheels} />} /> {/* Props sent data */}
        <Route path="/football_event" element={<Football_Event />} />
        <Route path="/form" element={<My_Form />} />
        
      </Routes>
    </BrowserRouter>
  );
}


 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// reportWebVitals();
