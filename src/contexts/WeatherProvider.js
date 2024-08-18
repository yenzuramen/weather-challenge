import React, { createContext, useState } from 'react'
import { getWeather } from '../services/Weather';

export const WeatherContext = createContext(); //Creating the context

export const WeatherProvider = ({ children }) => {

    const [weatherList, setWeatherList] = useState([])
    const [selectedCity, setsetselectedCity] = useState('')

    //Consuming service and setting weather list
    const getWeatherList = async (lat, lon, cityName) => {
        setsetselectedCity(cityName)
        let weatherListInfo = await getWeather(lat, lon)
        let sortedWeatherList = groupByDate(weatherListInfo.list)
        setWeatherList(sortedWeatherList)
    }

    //Methods and states to share
    const contextValue = {
        weatherList,
        setWeatherList,
        getWeatherList,
        selectedCity
    };

    // useEffect(() => {
    //     console.log('weather List', weatherList);
    // }, [weatherList])

    //Sorting weather array by days (since the api returns by hour)
    const groupByDate = (array) => {

        //Grouping data by days into an array
        const grouped = array.reduce((acc, obj) => {
            const dateOnly = obj.dt_txt.split(' ')[0];

            if (!acc[dateOnly]) {
                acc[dateOnly] = [];
            }

            acc[dateOnly].push(obj);

            return acc;
        }, {});


    
        return Object.keys(grouped).map((date) => {
            const events = grouped[date];

            //Getting min and max temperatures by day 
            const temp_min = Math.min(...events.map(obj => obj.main.temp_min));
            const temp_max = Math.max(...events.map(obj => obj.main.temp_max));

            //Getting min and max icons by day
            const obj_min = grouped[date].find(item => item.main.temp_min === temp_min);
            const obj_max = grouped[date].find(item => item.main.temp_max === temp_max);

            //Forming final object array
            return {
                date,
                events,
                temp_min,
                temp_max,
                icon_min: obj_min.weather[0].icon,
                icon_max: obj_max.weather[0].icon
            };
        });
    };

    return (
        <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>
    )
}


