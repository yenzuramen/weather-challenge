
const reservamosApi = process.env.REACT_APP_RESERVAMOS_API;

export const getCitiesReservamos = async (keywords) => {
    try {
        const response = await fetch(reservamosApi+'places?q='+keywords, { method: "GET" })
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