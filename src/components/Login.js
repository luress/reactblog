import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    let navigate = useNavigate()

    const login = () => {
      fetch('https://bloagapi1234.herokuapp.com/rest-auth/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({username:username, password:password})
      })
          .then(response => response.json())
          .then(result => {
              if(result.key === undefined) {
                  setError("Invalid username or password")
                  return
              }
              localStorage.setItem('mytoken', result.key)
              navigate('/articles')

          })
    }
    
    return (
        <div className={"container mt-4"}>
            <br/>

            {error ?
                <div className={"alert alert-warning alert-dismissible"} role={"alert"}>
                    <p>{error}</p>
                </div>
                :
                null
                }

            <h1>Login</h1>
            <div className={"mb-3"}>
                <input type={"text"} className={"form-control"}
                       name={"username"} placeholder={"Please Enter Username"}
                       value={username} onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <input type={"password"} className={"form-control"}
                       name={"password"} placeholder={"Please Enter Password"}
                       value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className={"mb-3"}>
                <button onClick={login} className={"btn btn-success"}>Login</button>
            </div>
        </div>
    );
}

export default Login;