const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherApi = process.env.REACT_APP_WEATHER_API;


export const getWeather = async (lat, lon) => {
    try {
        const response = await fetch(weatherApi+'forecast?lat=' + lat + '&lon=' + lon + '&appid='+weatherApiKey+'&units=metric',
            { method: "GET" })

        if (!response.ok) {
            throw new Error('Error con la respuesta');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error obteniendo data de reservamos:', error);
        throw error;
    }
};