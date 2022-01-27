import React from "react"
import {Link} from "react-router-dom"

function Main(props) {
    return <>
        <h1>Hello Main</h1>
        <Link to="/login"><h3>ADMIN LOGIN</h3></Link>
    </>
}

export default Main