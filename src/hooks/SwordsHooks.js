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

    // UPDATE
    const updateSwords = async (sw, id) => {
        console.log(url)
        await fetch(url + id, {
            method: "patch",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sw)
        })
        getSwords()
    }

    // DELETE
    const deleteSwords = async (sw, id) => {
        console.log(url)
        await fetch(url + id, {
            method: "delete"
        })
        getSwords()
    }

    // EXPORT HOOKS
    return {
        swords,
        setSwords,
        getSwords,
        updateSwords,
        deleteSwords
    }
}

export default SwordsHooks