import React from "react"
import {Link} from "react-router-dom"

function Main(props) {
    
    const loggedIn = () => {
        return <div class="main-container">
            <h1>Admin Portal</h1>
            <p class="main-p">You may use this app to add, remove, and edit items in your inventory. You may also edit the "About" and "Contact" sections, as well as view any pending work orders.</p>
        </div>
    }
    
    return props.renderPage(props.token, loggedIn())
}

export default Main