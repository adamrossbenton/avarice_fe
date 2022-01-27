import {useState} from "react"
import {useHistory, Link} from "react-router-dom"
import url from "./url"

function AdminHooks() {

    const loginUrl = url + "login"

    const history = useHistory()

    // TOKEN SETUP
    const getToken = () => {
        const tokenString = localStorage.getItem("token")
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }

    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        console.log(userToken)
        localStorage.setItem("token", JSON.stringify(userToken))
        setToken(userToken)
    }

    // LOGIN HOOK
    const loginUser = creds => {
        console.log(loginUrl)
        return fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(data => data.json())
    }

    // FORM HANDLERS
    const [newForm, setNewForm] = useState()
    const [attempts, setAttempts] = useState(0)

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }

    const noUser = () => {
        if (attempts > 0) {
            return <p>Incorrect username and/or password, please try again.</p>
        }
    }

    const ifLoggedIn = () => {
        return <>
            <h1>ADMIN ACCESS REQUIRED</h1>
            <Link to="/login"><h3>ADMIN LOGIN</h3></Link>
        </>
    }

    const handleLogin = async e => {
        setAttempts(attempts+1)
        e.preventDefault()
        if (newForm) {
            const {username} = newForm
            const {password} = newForm
            console.log(username, password)
            const token = await loginUser({
                username,
                password
            })
            console.log("Token: ", token)
            if (token && !token.error) {
                saveToken(token)
                history.push("/swords")
            } else {
                noUser()
            }
        }
    }

    return {
        // TOKEN
        token,
        setToken: saveToken,
        // LOGIN
        loginUser,
        // FORM HANDLERS
        handleChange,
        noUser,
        ifLoggedIn,
        handleLogin
    }
}

export default AdminHooks