import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

function Create(props) {
    const history = useHistory()

    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        price: 0.00,
        inches: 0,
        ounces: 0,
        mats: "",
        description: ""
    })

    const handleChange = e => {
        setNewForm({...newForm,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.createSwords(newForm)
        setNewForm({
            name: "",
            image: "",
            price: 0.00,
            inches: 0,
            ounces: 0,
            mats: "",
            description: ""
        })
        history.push("/swords")
    }

    const loggedIn = () => {
        return <>
            <h1>Create Sword</h1>
            <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input 
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="sword name"
                    onChange={handleChange}
                />
                <h3>Image URL:</h3>
                <input 
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <h3>Price:</h3>
                <input 
                    type="number"
                    value={newForm.price}
                    name="price"
                    placeholder="0.00"
                    step="0.01"
                    min="0.00"
                    onChange={handleChange}
                />
                <h3>Length (in):</h3>
                <input 
                    type="number"
                    value={newForm.inches}
                    name="inches"
                    placeholder="0"
                    min="0"
                    onChange={handleChange}
                />
                <h3>Weight (oz):</h3>
                <input 
                    type="number"
                    value={newForm.ounces}
                    name="ounces"
                    placeholder="0"
                    min="0"
                    onChange={handleChange}
                />
                <h3>Materials:</h3>
                <input 
                    type="text"
                    value={newForm.mats}
                    name="mats"
                    placeholder="sword construction materials"
                    onChange={handleChange}
                />
                <h3>Description:</h3>
                <textarea 
                    value={newForm.description}
                    name="description"
                    placeholder="sword description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Create Sword" />
            </form>
            <Link to="/swords"><h3 className="link-text">BACK TO INDEX</h3></Link>
        </>
    }

    return props.renderPage(props.token, loggedIn())
}

export default Create