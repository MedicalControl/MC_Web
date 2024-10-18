import React, {useState, useEffect} from "react";
import './Table.css';
import axios from "axios";

const Table = () => {

    const [appointments, setAppointments] = useState([]);
    const [cantidad , setCantidad] = useState(0);
    
    // estos funcionan para hacer busquedas por numero de expedientes
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [filteredAppointments, setFilteredAppointments] = useState([]); // Estado para las citas filtradas

    const fetchAppointments = async () => {
        
        try {
            const url = "api/app/appointment"
            const token = localStorage.getItem('token');
            console.log(`Token: ${token}`);
            
            const response = await axios.get(url, {
                headers: {
                    'authorization': token
                }

            });
            
            setCantidad(response.data.length);
            setAppointments(response.data);

            setFilteredAppointments(response.data);

            appointments.map((appointment) => {
                console.log(appointment)
            })
            
            console.log(`Total: ${cantidad}`);
            console.log(response.data);
            
        } catch (error) {
            console.error(`El error fue: ${error}`);
        }
    };

    useEffect(() => {
        const results = appointments.filter(appointment =>
            appointment.paciente.expediente.length > 0 &&
            appointment.paciente.expediente[0].nroexpediente.includes(searchTerm)
        );
        setFilteredAppointments(results);
    }, [searchTerm, appointments]); // Se ejecuta cuando searchTerm o appointments cambia

    useEffect(() => {
        fetchAppointments();
    }, []);
    return (
        <main className="container">
                <div className="heading-container">
                    <h1 className="heading">
                        Bienvenido
                    </h1>
                    <span className="highlight">Dr. Cristopher</span>
                    <h1 className="heading">¿A quién desea atender?</h1>
                </div>

              <div className="search-container">
                <input type="text" 
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
                    {/* No1 */}

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