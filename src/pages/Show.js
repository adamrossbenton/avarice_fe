import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function Show(props) {
    const history = useHistory()
    const id = props.match.params.id
    const swords = props.swords.data
    console.log(swords)
    const sword = swords?.find(sw => {
        return sw.id == id
    })
    console.log(sword)

    // const removeSword = () => {
    //     props.deleteSwords(sword.id)
    //     history.push("/swords")
    // }

    return <>
        <h1>Hello {sword.name}</h1>
        <h3>${sword.price}</h3>
        <Link to="/swords"><h4>Return to Swords</h4></Link>
    </>
}

export default Show