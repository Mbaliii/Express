import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/users/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>Phone is : {empdata.phone}</h5>
                            <h5>Position is : {empdata.position}</h5>
                            <h5>bio is : {empdata.bio}</h5>
                            <h5>Phone is : {empdata.phone}</h5>
                            <h5>dob is : {empdata.dob}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default Detail;