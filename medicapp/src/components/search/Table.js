import React, { useState, useEffect } from "react";
import './Table.css';
import { fetchAppointments } from "../../controllers/appointmentController";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { fetchMe } from "../../controllers/meController";

const Table = () => {
    const navigate = useNavigate(); // Inicializa useNavigate
    const [appointments, setAppointments] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    
    // Estos funcionan para hacer búsquedas por número de expedientes
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [filteredAppointments, setFilteredAppointments] = useState([]); // Estado para las citas filtradas

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getAppointments = async () => {
            try {
                await fetchAppointments(setAppointments, setCantidad, setFilteredAppointments);
            } catch (error) {
                // Si no hay token, redirige al usuario a la página de inicio de sesión
                if (error.message === "No hay token disponible") {
                    navigate('/login');
                }
            }
        };
        getAppointments();
        fetchMe(setUser);
    }, [navigate]);

    useEffect(() => {
        const results = appointments.filter(appointment =>
            appointment.paciente.expediente.length > 0 &&
            appointment.paciente.expediente[0].nroexpediente.includes(searchTerm)
        );
        setFilteredAppointments(results);
    }, [searchTerm, appointments]); // Se ejecuta cuando searchTerm o appointments cambia

    return (
        <main className="container">
            <div className="heading-container">
                <h1 className="heading">Bienvenido</h1>
                <h1 className="heading">¿A quién desea atender?</h1>
            </div>

            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Buscar por no expediente..."
                    value={searchTerm} 
                    className="search-input" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className="sort-select">
                    <option>Ordenar por: Más reciente</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                </select>
            </div>

            <table className="patient-table">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>No Expediente</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredAppointments.length > 0 ? (
                        filteredAppointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.paciente.nombres}</td>
                                <td>{appointment.paciente.apellidos}</td>
                                <td>
                                    {appointment.paciente.expediente.length > 0 ? (
                                        <button className="btn-expediente">
                                            {appointment.paciente.expediente[0].nroexpediente}
                                        </button>
                                    ) : (
                                        'No disponible'
                                    )}
                                </td>
                                <td>
                                    <span className={`status status-${appointment.estado.toLowerCase()}`}>
                                        {appointment.estado}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay registros disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    );
}

export default Table;
