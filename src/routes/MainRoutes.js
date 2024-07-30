import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
// import { Home } from '../components/Home'
// import { Navbar } from '../components/layout/Navbar'
// import { SkillsProjects } from '../components/SkillsProjects'


export const MainRouter = () => {


    return (

        <BrowserRouter>

            {/* <Navbar  /> */}
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/weather' element={<Home/>} />
                {/* <Route path='/about-me' element={<About />} /> */}
                {/* <Route path='/skills-projects' element={<SkillsProjects/>} /> */}
            </Routes>

        </BrowserRouter>
    )
}