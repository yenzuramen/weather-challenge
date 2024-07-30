import React, { useState } from 'react'



const SearchBar = () => {

    const [cityList, setCityList] = useState([])

    const getCities = async () => {
        // const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=25.6866142&lon=-100.3161126&appid=${apiKey}`;

        // const request = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=25.6866142&lon=-100.3161126&appid=0eebd1fcf852d29ca0340c5c451d4c9a', { method: "GET" })
        const request = await fetch('https://search.reservamos.mx/api/v2/places?q=monterrey', { method: "GET" })
        const data = await request.text();
        console.log(data);
        setCityList(data)
    }

    return (
        <>
            <input />
            <button onClick={getCities} >
                test
            </button>

            {cityList}
        </>
    );
}

export default SearchBar;