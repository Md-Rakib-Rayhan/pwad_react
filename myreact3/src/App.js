import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Blog_Entry from "./pages/Blog_Entry";






function App() {
    return (

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/blog_entry" element={<Blog_Entry />} />
                </Routes>
            </div>
   
    );
}



const Contact = () => <h1>Geeks Contact page</h1>;

export default App;
