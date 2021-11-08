import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <>
            <Navbar text="iNotebook"/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
