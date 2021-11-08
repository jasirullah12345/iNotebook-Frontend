import React, {useEffect} from 'react';
import NoteForm from "./NoteForm";
import Notes from "./Notes";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
            Navigate("/login");
        }
        // eslint-disable-next-line
    });

    return (
        <>
            <NoteForm/>
            <Notes/>
        </>
    );
};

export default Home;
