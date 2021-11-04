import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Note/NoteState";

function App() {
    return (
        <>
            <Navbar text="iNotebook"/>
            <div className="container">
                <NoteState>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </NoteState>
            </div>
        </>
    );
}

export default App;
