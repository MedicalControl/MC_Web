import React, { useState, useEffect } from "react";
import './Admisiones.css';
import { fetchAppointments } from "../../controllers/appointmentController";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { fetchMe } from "../../controllers/meController";



const Admisiones = () => {

    const navigate = useNavigate(); // Inicializa useNavigate
    const [appointments, setAppointments] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    
    // Estos funcionan para hacer búsquedas por número de expedientes
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [filteredAppointments, setFilteredAppointments] = useState([]); // Estado para las citas filtradas

    const [user, setUser] = useState(null);


    return (
        <main className="container">
            <div className="heading-container">
                <h1 className="heading">Historial de </h1>
                <h1 className="heading">admisiones</h1>
            </div>

            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Buscar por no expediente..."
                    value={searchTerm} 
                    className="search-input" 
                />
                <select className="sort-select">
                    <option>Ordenar por: Más reciente</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                </select>
            </div>
            
            <div className="patient-table-container">
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Medico encargado</th>
                            <th>Tipo de atencion</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Dr. Cristopher David</td>
                            <td>Consulta externa</td>
                            <td>2024-10-19</td>
                            <td>12:00pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Admisiones;
