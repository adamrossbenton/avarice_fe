import React from "react"
import {Link} from "react-router-dom"

function Main(props) {
    
    const loggedIn = () => {
        return <>
            <h1>Hello Main</h1>
            <Link to="/swords"><h3 className="link-text">SWORDS</h3></Link>
        </>
    }
    
    return props.renderPage(props.token, loggedIn())
}

export default Main