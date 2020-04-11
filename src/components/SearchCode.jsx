import React from "react"

export default ({searchCode}) => {
    
    const handleSubmit = e => {
        e.preventDefault()
        searchCode(e.target.firstChild.value)
        e.target.firstChild.value = ""
    }

    return (
        <div className="mb-4">
            <h6>Hello! Enter code here to get location.</h6>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter code"/>
            </form>
        </div>
    )
}