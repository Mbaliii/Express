import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('mongodb+srv://mbali:MBALENHLEKHUMALO@cluster0.muawygv.mongodb.net', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
                // will navigate to the login 
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-grey p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)} />
                    </div>


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

                    <button type="submit" className="btn btn-outline-success">Register</button>
                </form>
                <p>Already Have an Account??</p>
                <Link to='/Login' className="btn btn-outline-dark">Login</Link>

            </div>
        </div>
    );
}

export default Register;