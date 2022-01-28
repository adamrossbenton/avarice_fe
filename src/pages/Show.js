import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function Show(props) {
    const history = useHistory()
    const id = props.match.params.id
    const swords = props.swords?.data
    const sword = swords?.find(sw => {
        return sw.id == id
    })

    const removeSword = () => {
        props.deleteSwords(sword.id)
        history.push("/swords")
    }
    const loggedIn = () => {
        return <>
            <h1>{sword.name}</h1>
            <h3>${sword.price}</h3>
            <Link to={`/swords/${sword.id}/edit`}><h4>Edit {sword.name}</h4></Link>
            <form onSubmit={removeSword}><button>Delete {sword.name}</button></form>
            <Link to="/swords"><h4>Return to Swords</h4></Link>
        </>
    }

    return props.token && swords? loggedIn() : props.ifLoggedIn()
}

export default Show