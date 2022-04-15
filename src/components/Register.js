import React, {useState} from 'react';
import APIService from "./APIService";
import Button from "bootstrap/js/src/button";
import {useNavigate} from "react-router-dom";

function Register(props) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    let navigate = useNavigate()

    const register = () => {
        APIService.RegisterUser({username, email, password1, password2})
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))

    }

    return (
        <div className={"container mt-5"}>
            <h1>Register Account</h1>
            <div className={"mb-3"}>
                <input type={"text"} className={"form-control"} placeholder={"Please Enter Username"}
                value={username} onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <input type={"text"} className={"form-control"} placeholder={"Please Enter Email"}
                value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <input type={"password"} className={"form-control"} placeholder={"Please Enter Password"}
                value={password1} onChange={event => setPassword1(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <input type={"password"} className={"form-control"} placeholder={"Confirm Password"}
                value={password2} onChange={event => setPassword2(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <button onClick={register} className={"btn btn-success"}>Register User</button>
            </div>

        </div>
    );
}

export default Register;