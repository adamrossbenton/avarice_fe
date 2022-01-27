import React, {useEffect} from "react"
import {Link} from "react-router-dom"

function Index(props) {
    
    const token = props.token

    // useEffect to set initial scene
    useEffect(() => props.getSwords(), [])
    
    // once API call made
    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    // waiting for API call
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

    // Check if logged in
    if (!token) {
        return <>
            <h1>ADMIN ACCESS REQUIRED</h1>
            <Link to="/login"><h3>Login</h3></Link>
        </>
    }

    return <>
        <Link to="/swords/new"><h3>NEW SWORD</h3></Link>
        {props.swords? loaded() : loading()}
    </>
}

export default Index