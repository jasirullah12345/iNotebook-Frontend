import React, {useContext, useEffect} from 'react';
import UserContext from "../context/User/UserContext";
import {useNavigate} from "react-router-dom";

const About = () => {
    const context = useContext(UserContext);
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("auth-token")) {
            Navigate("/login");
        } else {
            context.userDetails();
        }
        // eslint-disable-next-line
    }, []);
    const User = context.user;
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h2 className="display-6">Welcome {User.name}</h2>
                </div>
            </div>
        </>
    );
};

export default About;
