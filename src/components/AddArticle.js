import React, {useState} from 'react';
import APIService from "../components/APIService";
import {useNavigate} from "react-router-dom";

function AddArticle(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const token = localStorage.getItem('mytoken')
    let navigate = useNavigate()

    const addArticle = () => {
        if(title === "" || description === "") {
            setError("Please add all fields")
            return;
        }
      APIService.InsertArticle({title, description}, token)
      .then(result => {
        props.insertedArticle(result)
        navigate('/articles')
        })
    }

    return (
        <div className={"container mt-5"}>
            {error ?
                <div className={"alert alert-warning alert-dismissible"} role={"alert"}>
                    <p>{error}</p>
                </div>
                :
                null
            }
            <h2>Add Article</h2>
            <div className={"mb-3"}>
                <input type={"text"} className={"form-control"} placeholder={"Please Enter Title"}
                       value={title} onChange={event => setTitle(event.target.value)}/>
            </div>
             <div className={"mb-3"}>
                <textarea rows={"5"} className={"form-control"} placeholder={"Please Enter Description"}
                       value={description} onChange={event => setDescription(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <button onClick={addArticle} className={"btn btn-success"}>Add Article</button>
            </div>

        </div>
    );
}

export default AddArticle;