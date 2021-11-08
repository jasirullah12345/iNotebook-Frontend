import React, {useState, useContext} from 'react';
import UserContext from "../context/User/UserContext";

const Signup = () => {
    const context = useContext(UserContext);
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cPassword: ""});
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password === credentials.cPassword) {
            await context.signup(credentials.name, credentials.email, credentials.password);
        } else {
            alert("Both passwords are not matched");
        }
    };
    return (
        <>
            <div className="my-3 p-3 mx-auto" id="noteForm" style={{maxWidth: "600px"}}>
                <h2 className="text-center">Create an account on iNotebook</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name"
                               aria-describedby="emailHelp" onChange={onChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email"
                               aria-describedby="emailHelp" onChange={onChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                               onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cPassword" name="cPassword"
                               onChange={onChange} minLength={5} required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-5 d-block mx-auto">Signup
                    </button>
                </form>
            </div>
        </>
    );
};

export default Signup;
