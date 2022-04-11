import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main style={{ padding: "5rem", textAlign: "center" }}>
            <h4>There's nothing here!</h4>
            <Link to="/">HOME</Link>
        </main>
    )
}

export default NotFound