import React, {useState, useEffect} from 'react';
import APIService from "./APIService";
import {useNavigate} from "react-router-dom";

function UpdateArticle(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const token = localStorage.getItem('mytoken')
    let navigate = useNavigate()

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.slug, {title,description}, token)
            .then(result => {
                props.updateData(result)
                navigate("/articles")
            })
            .catch(error => console.log(error))


    }

    return (
        <div className={"container mt-5"}>
            <h2>Update Article</h2>
            <div className={"mb-3"}>
                <input type={"text"} className={"form-control"} placeholder={"Please Enter Title"}
                       value={title} onChange={event => setTitle(event.target.value)}/>
            </div>
             <div className={"mb-3"}>
                <textarea rows={"5"} className={"form-control"} placeholder={"Please Enter Description"}
                       value={description} onChange={event => setDescription(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <button onClick={updateArticle} className={"btn btn-success"}>Update Article</button>
            </div>

        </div>
    );
}

export default UpdateArticle;