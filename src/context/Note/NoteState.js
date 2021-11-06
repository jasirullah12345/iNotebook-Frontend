import React, {useState} from 'react';
import NoteContext from "./NoteContext";
import $ from "jquery";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    // Fetch all notes
    const getNotes = async () => {
        const url = SERVER_PORT + "/api/note/fetchallnotes";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MDM0OTk3OGUyZGZhMTJhMTUwYzhmIn0sImlhdCI6MTYzNTc5ODA0N30.SJwEagw74b13NpUKddgJHdzoSjiKJTUg8RgaajixCIo'
            }
        });
        const data = await response.json()
        setNotes(data);
    };
    // Add notes
    const addNote = async (title, description, tag) => {
        const url = SERVER_PORT + "/api/note/addnote";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MDM0OTk3OGUyZGZhMTJhMTUwYzhmIn0sImlhdCI6MTYzNTc5ODA0N30.SJwEagw74b13NpUKddgJHdzoSjiKJTUg8RgaajixCIo'
            },
            body: JSON.stringify({title, description, tag}),
        });
        if (response.status === 200) {
            await getNotes();
            alert("New Note Added");
            $("#noteForm input").val("");
        } else {
            await displayError(response);
        }
    };
    // Delete notes
    const deleteNote = async (id) => {
        const url = SERVER_PORT + "/api/note/deletenote/" + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MDM0OTk3OGUyZGZhMTJhMTUwYzhmIn0sImlhdCI6MTYzNTc5ODA0N30.SJwEagw74b13NpUKddgJHdzoSjiKJTUg8RgaajixCIo'
            }
        });
        if (response.status === 200) {
            await getNotes();
            alert("Note Deleted");
        } else {
            await displayError(response);
        }
    };
    // Update notes
    const updateNote = () => {
        console.log("Notes updated");
    };

    // Display Errors
    const displayError = async (response) => {
        const data = await response.json();
        if (data.error) {
            alert(data.error);
        } else {
            const errors = data.errors;
            let txt = "";
            for (let i = 0; i < errors.length; i++) {
                txt += errors[i].msg;
                txt += ' \n';
            }
            alert(txt);
        }
    };
    return (
        <>
            <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote, getNotes}}>
                {props.children}
            </NoteContext.Provider>
        </>
    );
};

export default NoteState;
