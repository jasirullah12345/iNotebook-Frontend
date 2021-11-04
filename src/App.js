import './App.css';
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar text="iNotebook"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
