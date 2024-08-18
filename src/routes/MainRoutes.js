import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'

export const MainRouter = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/weather' element={<Home/>} />
            </Routes>

        </BrowserRouter>
    )
}