import React from "react"

function Header(props) {
    
    const logout = () => {
        localStorage.clear()
    }

    return <div className="header">
        <h1>A V A R I C E</h1>
        {props.token?
            <form onSubmit={logout}>
                <input type="submit" value="logout" />
            </form>
        : null}
    </div>
}

export default Header