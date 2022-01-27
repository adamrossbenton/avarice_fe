import React from "react"

function Header(props) {
    
    const logout = () => {
        localStorage.clear()
    }

    return <>
        <h1>Hello Header</h1>
        {props.token?
            <form onSubmit={logout}>
                <input type="submit" value="logout" />
            </form>
        : null}
    </>
}

export default Header