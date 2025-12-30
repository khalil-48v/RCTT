import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import Contact from './Contact'
import Blog from "./Blog"
export default function Appp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
