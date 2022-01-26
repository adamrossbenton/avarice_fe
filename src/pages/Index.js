import React, {useEffect} from "react"

function Index(props) {
    // useEffect to set initial scene
    useEffect(() => props.getSwords(), [])
    
    const loading = () => {
        console.log("Loading...")
        console.log(props.swords)
        return <h1>Loading...</h1>
    }
    
    const loaded = () => {
        const allSwords = props.swords.data
        return allSwords.map((sw) => (
            <>
                <h1>{sw.name}</h1>
                <h3>{sw.price}</h3>
                <h5>{sw.description}</h5>
            </>
        ))
    }

    return <>
        {props.swords? loaded() : loading()}
    </>
}

export default Index