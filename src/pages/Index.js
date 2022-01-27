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

    const ifLoggedIn = () => {
        return <>
            <h1>ADMIN ACCESS REQUIRED</h1>
            <Link to="/login"><h3>LOGIN</h3></Link>
        </>
    }

    // Check if logged in
    // if (!token) {
    //     return <>
    //         <h1>ADMIN ACCESS REQUIRED</h1>
    //         <Link to="/login"><h3>Login</h3></Link>
    //     </>
    // }
    ifLoggedIn()

    return <>
        <Link to="/swords/new"><h3>NEW SWORD</h3></Link>
        {props.token? props.swords? loaded() : loading() : ifLoggedIn()}
    </>
}

export default Index