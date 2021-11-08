import React, {useState} from 'react';
import UserContext from "./UserContext";
import {useNavigate} from "react-router-dom";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const UserState = (props) => {
    const Navigate = useNavigate();
    const [user, setUser] = useState({});

    // Login user
    const login = async (email, password) => {
        const url = SERVER_PORT + "/api/auth/login";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("auth-token", data.authenticationToken);
            await userDetails();
            Navigate("/");
        } else {
            await displayError(response);
        }
    };

    // Get User Details
    const userDetails = async () => {
        if (localStorage.getItem("auth-token")) {
            const url = SERVER_PORT + "/api/auth/getuser";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("auth-token")
                }
            });
            if (response.status === 200) {
                const data = await response.json();
                setUser({
                    id: data._id,
                    name: data.userName,
                    email: data.email
                })
            } else {
                await displayError(response);
            }
        }
    };

    // Logout User
    const logout = async () => {
        setUser({isLogin: false});
        localStorage.removeItem("auth-token");
        Navigate("/login");
    };

    // SignUp User
    const signup = async (userName, email, password) => {
        const url = SERVER_PORT + "/api/auth/createuser";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName, email, password}),
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("auth-token", data.authenticationToken);
            await userDetails();
            Navigate("/")
        } else {
            await displayError(response);
        }
    };

    // Display Errors
    const displayError = async (response) => {
        const data = await response.json();
        if (data.error) {
            alert(data.error);
        } else if (data.errors) {
            const errors = data.errors;
            let txt = "";
            for (let i = 0; i < errors.length; i++) {
                txt += errors[i].msg;
                txt += ' \n';
            }
            alert(txt);
        } else {
            alert("No response from server");
        }
    };
    return (
        <>
            <UserContext.Provider value={{user, login, logout, signup, userDetails}}>
                {props.children}
            </UserContext.Provider>
        </>
    );
};

export default UserState;
