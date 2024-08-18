import React, { useContext } from 'react'
import '../styles/Information.css';
import { WeatherContext } from '../contexts/WeatherProvider';

const weatherApiImg = process.env.REACT_APP_WEATHER_API_IMG;

const Infomation = () => {

    const { weatherList, selectedCity } = useContext(WeatherContext)

    return (
        <>
            <div className='content-container'>

                {weatherList.length === 0 ? (
                    <div className='info-placeholder'>
                        <div className='info-placeholder-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>


                        <div>
                            Busque una ciudad
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='weather-text-label'>
                            {selectedCity}
                        </div>
                        <div className='weather-forecast-container'>

                            {weatherList.map((day, key) => {
                                return (
                                    <div key={key} className='weather-card'>
                                        <div className='date-chip'>
                                            {day.date}
                                        </div>
                                        <div className='weather-text-label'>
                                            Maxima
                                        </div>
                                        <div className='weather-temp-info'>
                                            <img src={`${weatherApiImg}${day.icon_max}.png`} alt=''/>
                                            <div>
                                                {day.temp_max}  °C
                                            </div>
                                        </div>
                                        <div className='weather-text-label'>
                                            Minima
                                        </div>
                                        <div className='weather-temp-info'>
                                            <img src={`${weatherApiImg}${day.icon_min}.png`} alt=''/>
                                            <div>
                                                {day.temp_min}  °C
                                            </div>


                                        </div>


                                    </div>
                                )
                            })}

                        </div>
                    </>

                )

                }


            </div>

        </>
    )
}

export default Infomation
