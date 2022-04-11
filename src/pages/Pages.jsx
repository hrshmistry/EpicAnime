import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Anime from './Anime'

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Anime />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Pages