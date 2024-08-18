import React, { useContext, useState } from 'react'
import '../styles/Search-bar.css';
import { getCitiesReservamos } from "../services/Rerservamos";
import { WeatherContext } from '../contexts/WeatherProvider';

const SearchBar = () => {

    const [cityList, setCityList] = useState([])
    const [cityName, setCityName] = useState('')
    const { getWeatherList, setWeatherList } = useContext(WeatherContext)

    //Consuming Reservamos service and setting CityList
    const getCities = async () => {
        const data = await getCitiesReservamos(cityName)        
        setCityList(data.slice(0, 5));
    }

    //Setting city name
    const handleCityChange = (e) => {
        setCityName(e.target.value)
    }

    //Cleaning states
    const cleanData = () =>{
        setCityList([]);
        setWeatherList([]);
        setCityName('')
    }


    return (
        <div className='search-bar-container'>

            <input className='city-input' value={cityName} onChange={handleCityChange} />
            <button className='search-city-btn' onClick={getCities} >
                Buscar ciudad
            </button>
            <button className='search-city-btn' onClick={cleanData} >
                Limpiar
            </button>

            <div className='city-list'>
                {cityList.map((city, key) => {
                    return (<div className='city-list-item' key={key} onClick={()=>{getWeatherList(city.lat, city.long,city.city_name); setCityList([])}}>
                        {city.city_name}
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchBar;