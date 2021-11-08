import React, {useState} from 'react';
import UserContext from "./UserContext";
import $ from "jquery";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const UserState = (props) => {
    const [user, setUser] = useState([]);
    // Fetch all notes
    const login = async () => {
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
    const logout = async (title, description, tag) => {
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
    const signup = async (name, email, password) => {
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
            <UserContext.Provider value={{user,login,logout,signup}}>
                {props.children}
            </UserContext.Provider>
        </>
    );
};

export default UserState;
