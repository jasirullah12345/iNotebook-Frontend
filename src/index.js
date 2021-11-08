import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter} from "react-router-dom";
// Context API
import UserState from "./context/User/UserState";
import NoteState from "./context/Note/NoteState";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserState>
                <NoteState>
                    <App/>
                </NoteState>
            </UserState>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);