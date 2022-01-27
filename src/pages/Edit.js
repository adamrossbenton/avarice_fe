import {useState, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"

function Edit(props) {

    useEffect(() => props.getSwords(), [])

    const history = useHistory()
    const id = props.match.params.id
    const swords = props.swords.data
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

    return <>
        <h1>Edit {sword.name}</h1>
    </>
}

export default Edit