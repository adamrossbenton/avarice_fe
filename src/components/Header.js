import React from "react"
import {Nav, Navbar, NavDropdown } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

function Header(props) {
    
    const logout = () => {
        localStorage.clear()
    }

    const loggedIn = () => {
        return <div className="header-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" id="header-navbar" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Weapons" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/swords">Swords</NavDropdown.Item>
                            <NavDropdown.Item>Knives (Coming Soon)</NavDropdown.Item>
                            <NavDropdown.Item>Axes/Polearms (Coming Soon)</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Armor (Coming Soon)</Nav.Link>
                        <Nav.Link>About (Coming Soon)</Nav.Link>
                        <Nav.Link>Contact (Coming Soon)</Nav.Link>
                        <Nav.Link>Orders (Coming Soon)</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="header">
                <h1 id="header-title">A V A R I C E</h1>
                <h5 id="header-subtitle">The Smith</h5>
                <form onSubmit={logout}>
                    <input type="submit" value="l o g   o u t" className="logout-button" />
                </form>
            </div>
        </div>
    }

    const notLoggedIn = () => {
        return <div className="header">
            <h1>A V A R I C E</h1>
            <h5>The Smith</h5>
            {/* {props.token?
                <form onSubmit={logout}>
                    <input type="submit" value="logout" className="logout-button" />
                </form>
            : null} */}
        </div>
    }

    return props.token? loggedIn() : notLoggedIn()

}

export default Header