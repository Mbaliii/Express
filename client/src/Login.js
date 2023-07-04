
import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('mongodb+srv://mbali:MBALENHLEKHUMALO@cluster0.muawygv.mongodb.net', { email, password })
            .then(result => {
                console.log(result)
                if (result.data) {
                    navigate('/Employee')
                }
                // will navigate to the home page
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-grey p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Login</button> |
                </form>
                {/* <Link className="btn btn-outline-success" to={'/Employee'}>New User</Link> */}
            </div>
        </div>
    )
};

export default Login;