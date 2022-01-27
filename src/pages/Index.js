import React, {useEffect} from "react"
import {Link} from "react-router-dom"

function Index(props) {
    // useEffect to set initial scene
    useEffect(() => props.getSwords(), [])
    
    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    const loaded = () => {
        const allSwords = props.swords.data
        
        return allSwords.map((sw) => (
            <>
                <Link to={`/swords/${sw.id}`}><h1>{sw.name}</h1></Link>
                <img src={sw.image} alt="" />
                <h3>{sw.price}</h3>
                <h5>{sw.description}</h5>
            </>
        ))
    }

    return <>
        <Link to="/swords/new"><h3>NEW SWORD</h3></Link>
        {props.swords? loaded() : loading()}
    </>
}

export default Index