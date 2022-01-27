import {useState} from "react"
import url from "./url"

function SwordsHooks() {
    const [swords, setSwords] = useState(null)

    // GET
    const getSwords = async () => {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setSwords(data)
    }

    // CREATE
    const createSwords = async (sw) => {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sw)
        })
        getSwords()
    }

    // UPDATE
    const updateSwords = async (sw, id) => {
        console.log(url)
        await fetch(url + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sw)
        })
        getSwords()
    }

    // DELETE
    const deleteSwords = async (id) => {
        console.log(url)
        await fetch(url + id, {
            method: "DELETE"
        })
        getSwords()
    }

    // EXPORT HOOKS
    return {
        swords,
        getSwords,
        createSwords,
        updateSwords,
        deleteSwords
    }
}

export default SwordsHooks