import React from "react"
import {Link} from "react-router-dom"

function RenderHooks() {
    
    // Renders while awaiting API call
    const loading = () => {
        return <h2 className="render">Loading...</h2>
    }

    // Prompts user to login if not logged in
    const notLoggedIn = () => {
        return <>
            <h1 className="render">ADMIN ACCESS REQUIRED</h1>
            <Link to="/login" className="link-text"><h3>ADMIN LOGIN</h3></Link>
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