import React, {useEffect} from "react"
import {Link} from "react-router-dom"

function Index(props) {
    
    const token = props.token

    // useEffect to set initial scene
    useEffect(() => props.getSwords(), [])
        
    // waiting for API call
    const loaded = () => {
        const allSwords = props.swords.data
        
        return <div className="top-container" id="index-container">
            <Link to="/swords/new"><h1 className="link-text">NEW SWORD</h1></Link>
            {allSwords.map((sw) => (
                <div className="item-container">
                    <img src={sw.image} alt="" />
                    <div className="item-text-container">
                        <Link to={`/swords/${sw.id}`}><h1 className="link-text">{sw.name}</h1></Link>
                        <h3>{sw.price}</h3>
                        <p className="no-small-screen">{sw.description}</p>
                    </div>
                </div>
            ))}
        </div>

    }

    return props.swords? props.renderPage(token, loaded()) : props.loading()

}

export default Index