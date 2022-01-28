import React from "react"
import {Link} from "react-router-dom"

function RenderHooks() {
    
    // Renders while awaiting API call
    const loading = () => {
        return <h2>Loading...</h2>
    }

    // Prompts user to login if not logged in
    const notLoggedIn = () => {
        return <>
            <h1>ADMIN ACCESS REQUIRED</h1>
            <Link to="/login"><h3>ADMIN LOGIN</h3></Link>
        </>
    }

    // Returns rendered page if logged in, otherwise returns login request page
    const renderPage = (token, loadFn) => {
        return token? loadFn : notLoggedIn()
    }

    // EXPORT HOOKS
    return {
        loading,
        renderPage,
    }
}

export default RenderHooks