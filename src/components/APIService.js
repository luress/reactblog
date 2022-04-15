

export default class APIService {
    static InsertArticle(body, token) {
        return fetch('https://bloagapi1234.herokuapp.com/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        })
            .then(response => response.json())
    }

    static RegisterUser(body) {
        return fetch('https://bloagapi1234.herokuapp.com/rest-auth/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        })
            .then(response => response.json())
    }

    static UpdateArticle(article_slug, body, token) {
        return  fetch(`https://bloagapi1234.herokuapp.com/articles/${article_slug}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body:JSON.stringify(body)
        })
            .then(response => response.json())
    }

    static DeleteArticle(article_slug, token) {
        return fetch(`https://bloagapi1234.herokuapp.com/articles/${article_slug}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })


    }
}