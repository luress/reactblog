import React from 'react';
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import APIService from "./APIService";
import {useNavigate} from "react-router-dom";


function ArticleDetails(props) {

    const params = useParams()
    const [article, setArticle] = useState([])
    const [req, setReq] = useState('')
    let navigate = useNavigate()
    const token = localStorage.getItem('mytoken')

    useEffect(() => {
        fetch(`https://bloagapi1234.herokuapp.com/articles/${params.slug}/`, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
            .then(response => response.json())
            .then(result => setArticle(result))
            .catch(error => console.log(error))
    }, [params.slug, token])

    useEffect(() => {
        fetch('https://bloagapi1234.herokuapp.com/rest-auth/user/', {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(response => response.json())
        .then(result => setReq(result))
        .catch(error => console.log(error))
    }, [token])

    const updateBtn = (article) => {
        props.updateBtn(article)

    }

    const deleteBtn = (article) => {
        APIService.DeleteArticle(article.slug, token)
            .then(() => {
                props.deleteBtn(article);
                navigate('/articles')
            })
        .catch(error => console.log(error))
    }

    return (
        <div className={"container mt-4"}>
            <h1>{article.title}</h1>
            <h6>
                Published {article.published} by <i>{article.author}</i>
            </h6>
            <br/>
            <p>{article.description}</p>
            {req.username === article.author ?
                <div>
                    <button onClick={() => deleteBtn(article)} className={"btn btn-danger mx-3 mt-3"}>Delete</button>
                    <Link to="/update"><button onClick={() => updateBtn(article)} className={"btn btn-success mx-3 mt-3"}>Update</button></Link>
                </div>
                :
                null
            }
        </div>

    );
}

export default ArticleDetails;