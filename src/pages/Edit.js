import {useState, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function Edit(props) {

    useEffect(() => props.getSwords(), [])

    const history = useHistory()
    const id = props.match.params.id
    const swords = props.swords?.data
    const sword = swords?.find(sw => {
        return sw.id == id
    })

    const [editForm, setEditForm] = useState(sword)

    const handleChange = e => {
        setEditForm({...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateSwords(editForm, sword.id)
        history.push("/swords")
    }

    const loggedIn = () => {

        return <>
            <h1>Edit {sword.name}</h1>
            <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input 
                    type="text"
                    value={editForm? editForm.name : ""}
                    name="name"
                    placeholder="sword name"
                    onChange={handleChange}
                />
                <h3>Image URL:</h3>
                <input 
                    type="text"
                    value={editForm? editForm.image : ""}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <h3>Price:</h3>
                <input 
                    type="number"
                    value={editForm? editForm.price : 0.00}
                    name="price"
                    placeholder="0.00"
                    step="0.01"
                    min="0.00"
                    onChange={handleChange}
                />
                <h3>Length (in):</h3>
                <input 
                    type="number"
                    value={editForm? editForm.inches : 0}
                    name="inches"
                    placeholder="0"
                    min="0"
                    onChange={handleChange}
                />
                <h3>Weight (oz):</h3>
                <input 
                    type="number"
                    value={editForm? editForm.ounces : 0}
                    name="ounces"
                    placeholder="0"
                    min="0"
                    onChange={handleChange}
                />
                <h3>Materials:</h3>
                <input 
                    type="text"
                    value={editForm? editForm.mats : ""}
                    name="mats"
                    placeholder="sword construction materials"
                    onChange={handleChange}
                />
                <h3>Description:</h3>
                <textarea 
                    value={editForm? editForm.description : ""}
                    name="description"
                    placeholder="sword description"
                    cols="40"
                    rows="5"
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value={`Update ${sword.name}`} />
            </form>
            <Link to={`/swords/${sword.id}`}><h3 className="link-text">CANCEL</h3></Link>
        </>
    }

    return sword? props.renderPage(props.token, loggedIn()) : props.loading()

}

export default Edit