import React, {useState} from "react"
import {Link} from "react-router-dom"

function Login(props) {
    
    return <>
        <h1>ENTER ADMIN LOGIN INFO</h1>
        <form onSubmit={props.handleLogin}>
            <label>
                <p>Username: </p>
                <input 
                    type="text"
                    name="username"
                    placeholder="Admin"
                    onChange={props.handleChange}
                />
            </label>
            <label>
                <p>Password: </p>
                <input 
                    type="password"
                    name="password"
                    placeholder="hunter2"
                    onChange={props.handleChange}
                />
            </label><br />
            <button type="submit">ADMIN LOGIN</button>
            {/* <input type="submit" value="Admin Login" /> */}
        </form>
        <Link to="/"><h3>Return to Main Page</h3></Link>
    </>
}

export default Login