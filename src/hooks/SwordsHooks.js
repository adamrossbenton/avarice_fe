import {useState} from "react"
import url from "./url"

function SwordsHooks() {
    const swordsUrl = url + "swords"
    console.log(swordsUrl)
    const [swords, setSwords] = useState(null)

    // GET
    const getSwords = async () => {
        const response = await fetch(swordsUrl)
        const data = await response.json()
        setSwords(data)
    }

    // EXPORT HOOKS
    return {
        swords,
        setSwords,
        getSwords
    }
}

export default SwordsHooks