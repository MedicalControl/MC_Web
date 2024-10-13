import React from "react";
import './Pacientes.css';
import { Link } from "react-router-dom";

const Pacientes = () => {
    return (
        <main className="container">
                    <div className="heading-container">
                        <h1 className="heading">Lista de Pacientes</h1>
                        <h1 className="heading">
                            <span className="highlight">Pendientes</span>
                        </h1>
                    </div>

                <div className="search-container">
                    <input type="text" placeholder="Buscar paciente..." className="search-input" />
                    <select className="sort-select">
                        <option>Mostrar 10</option>
                        <option>Opción 1</option>
                        <option>Opción 2</option>
                    </select>
                </div>

                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Expediente</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Hora</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* No1 */}
                        {/* Orina */}
                        <tr>
                            <td>29294ASD</td>
                            <td>Yasser</td>
                            <td>Darce</td>
                            <td>20</td>
                            <td>M</td>
                            <td>9:10 am</td>
                            <td>
                                <span className="status status-atender">
                                    <Link 
                                    to="/expediente"
                                    style={{ textDecoration: 'none', color: 'white' }}>               
                                        Atender
                                    </Link>
                                </span>
                            </td>
                        </tr>

                        {/* No2 */}
                        {/* Sangre */}
                        <tr>
                            <td>29294ASD</td>
                            <td>Yasser</td>
                            <td>Darce</td>
                            <td>20</td>
                            <td>M</td>
                            <td>9:10 am</td>
                            <td><span className="status status-atender">Atender</span></td>
                        </tr>
                        

                    </tbody>
                </table>

                {/* Aqui se abren la orden */}
                
               

            </main>
    );
};

export default Pacientes;