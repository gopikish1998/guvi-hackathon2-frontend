import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import env from "./settings";


function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    let history = useHistory()
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`${env.api}/login`, { username, password })
            console.log(logindata)
            window.localStorage.setItem("app_token",logindata.data.token)
            history.push("/user")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main class="form-signin text-center">
            <form onSubmit={handleSubmit}>

                <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">USER SIGN IN</h1>

                <div class="form-floating">
                    <input type="email" value={username} onChange={e => setusername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                {/* <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div> */}
                <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign in" />
                <p class="mt-5 mb-3 text-muted">Don't have an account<Link to="/register-user" className="btn btn-primary">Register here</Link></p>

            </form>
        </main>

    )
}

export default Login