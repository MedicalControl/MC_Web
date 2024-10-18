// src/controllers/appointmentController.js
import axios from "axios";

export const fetchAppointments = async (setAppointments, setCantidad, setFilteredAppointments) => {
    try {
        const url = "api/app/appointment";
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("No hay token disponible");
        }
        
        console.log(`Token: ${token}`);
        
        const response = await axios.get(url, {
            headers: {
                'authorization': token
            }
        });
        
        setCantidad(response.data.length);
        setAppointments(response.data);
        setFilteredAppointments(response.data);

        response.data.forEach((appointment) => {
            console.log(appointment);
        });
        
        console.log(`Total: ${response.data.length}`);
        console.log(response.data);
        
    } catch (error) {
        console.error(`El error fue: ${error}`);
        throw error; // Lanza el error para manejarlo en el componente
    }
};
