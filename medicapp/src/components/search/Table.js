import React from "react";
import './Table.css';

const Table = () => {

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
                <input type="text" placeholder="Buscar..." className="search-input" />
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
                        <th>Último Diagnóstico</th>
                        <th>Última cita</th>
                        <th>Próxima cita</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>
                    {/* No1 */}
                    <tr>
                        <td>Jose Antonio</td>
                        <td>Marin Zelaya</td>
                        <td>Gripe</td>
                        <td>20/10/2022</td>
                        <td>1/12/2022</td>
                        <td><span className="status status-recuperado">Recuperado</span></td>
                    </tr>

                    {/* No2 */}
                    <tr>
                        <td>Jose Antonio</td>
                        <td>Marin Zelaya</td>
                        <td>Gripe</td>
                        <td>20/10/2022</td>
                        <td>1/12/2022</td>
                        <td><span className="status status-tratamiento">En tratamiento</span></td>
                    </tr>

                    {/* No3 */}
                    <tr>
                        <td>Jose Antonio</td>
                        <td>Marin Zelaya</td>
                        <td>Gripe</td>
                        <td>20/10/2022</td>
                        <td>1/12/2022</td>
                        <td><span className="status status-pendiente">Pendiente</span></td>
                    </tr>

                    

                </tbody>
              </table>

        </main>
    );
}

export default Table;