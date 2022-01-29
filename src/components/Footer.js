import React from "react"

function Footer(props) {
    const year = new Date().getFullYear()
    
    return <div className="footer">
        <small>Website Designed by adamrossbenton </small>
        {year===2022? <small>©{year}</small> : <small>© 2022 - {year}</small>}
    </div>
}

export default Footer