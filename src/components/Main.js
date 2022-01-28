import React from "react"
import {Link} from "react-router-dom"

function Main(props) {
    
    const loggedIn = () => {
        return <>
            <h1>Hello Main</h1>
            <Link to="/swords"><h3>SWORDS</h3></Link>
        </>
    }
    
    return props.token? loggedIn() : props.notLoggedIn()
}

export default Main