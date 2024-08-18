//rafc
import React from 'react'
import SearchBar from './SearchBar'
import '../styles/Home.css';
import Infomation from './Infomation';


const Home = () => {
    return (
        <div className='home-layout'>
            <div className='title-tag'>CITY WEATHER</div>
            <SearchBar />
           <Infomation/>
        </div>
    )
}

export default Home
