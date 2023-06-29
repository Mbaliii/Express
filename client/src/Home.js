import React from "react";
import { Link } from "react-router-dom";




const Home = () => {
    return (
        <div>
            <center>
            <h1>Welcome </h1>
            <div>
                <center>
                <Link className="btn btn-success" to={'/register'}>New User</Link>
                </center>
            </div>
            </center>
        </div>
    );
}
export default Home;