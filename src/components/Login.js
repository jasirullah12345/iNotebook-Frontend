import React, {useState} from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello");
    };
    return (
        <>
            <div className="my-3 p-3 mx-auto" id="noteForm" style={{maxWidth: "600px"}}>
                <h2 className="text-center">Login to iNotebook</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email"
                               aria-describedby="emailHelp" onChange={onChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                               onChange={onChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-5 d-block mx-auto">Login</button>
                </form>
            </div>
        </>
    );
};

export default Login;
