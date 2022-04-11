import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Film from './Film'

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Pages