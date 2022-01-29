import React, {useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function Show(props) {
    
    useEffect(() => props.getSwords(), [])

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
        return <div className="show-container">
            <div className="show-container-sublevel">
                <img src={sword.image} alt="" />
                <div className="show-specs">
                    <h1>{sword.name}</h1>
                    <h5>${sword.price}</h5>
                    <h6>Length: {sword.inches}"</h6>
                    <h6>Weight: {sword.ounces} oz</h6>
                    <h6>Blade Materials: {sword.mats}</h6>
                </div>
            </div>
            <p className="show-description">{sword.description}</p><br/>
            <div className="show-admin-options">
                <Link to={`/swords/${sword.id}/edit`}><h3 className="link-text">Edit {sword.name}</h3></Link>
                <form onSubmit={removeSword}><button>Delete {sword.name}</button></form>
                <Link to="/swords"><h3 className="link-text">Return to Swords</h3></Link>
            </div>
        </div>
    }

    return props.swords? props.renderPage(props.token, loggedIn()) : props.loading()
}

export default Show