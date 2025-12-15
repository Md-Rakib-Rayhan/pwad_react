import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
// import reportWebVitals from './reportWebVitals';


// Browser Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// new
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Nav from './components/Nav';

 




function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
