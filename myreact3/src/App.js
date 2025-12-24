import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from "./pages/Service";
import Blog from "./pages/Blog";




function App() {
    return (

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
   
    );
}



const Contact = () => <h1>Geeks Contact page</h1>;

export default App;
