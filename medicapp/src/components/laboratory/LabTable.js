    import React, { useState } from "react";
    import "./LabTable.css";
    import Orden from "./Orden";
    import ExOrina from "./ExOrina";
    import ExSangre from "./ExSangre";

    const LabTable = () => {
        const [selectediD, setSelectedId] = useState(null);
        const [tooltipVisible, setTooltipVisible] = useState(false);
        const [selectedOption, setSelecteOption] = useState(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [tipoExamen,  setTipoExamen] = useState(null);
        


        const handleTooltipClick = (id, tipo) => {
            if (selectediD === id) {
                setTooltipVisible(!tooltipVisible);
            } else {
                setSelectedId(id);
                setTooltipVisible(true);
                setTipoExamen(tipo);
            }
        };

        const handleOptionClick = (option) => {
            console.log("Opc seleccionada:", option);
            setSelecteOption(option);
            setTooltipVisible(false); // ocultarlo luego de seleccionarlo
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setSelecteOption(null);
            //setTipoExamen(null);
        }

        const handleTipoExamenChange = (tipo) => {
            setTipoExamen(tipo);
            console.log("Tipo de examen: ", tipo);
        }


        return (
            <main className="container">
                    <div className="heading-container">
                        <h1 className="heading">Órdenes de</h1>
                        <h1 className="heading">
                            <span className="highlight">Laboratorio</span>
                        </h1>
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
                            <th>No de expediente</th>
                            <th>Paciente</th>
                            <th>Tipo de examen</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* No1 */}
                        {/* Orina */}
                        <tr>
                            <td 
                                className="tooltip-container"

                            >
                                <span
                                    className="tooltip-button"
                                    onClick={() => handleTooltipClick("161FEBCM07027201", "orina")}
                                >
                                    161FEBCM07027201
                                </span>

                                {tooltipVisible && selectediD === "161FEBCM07027201" && (
                                    <div className="tooltip-content">
                                        <div
                                            className="tooltip-option"
                                            onClick={() => handleOptionClick("Orden")}
                                        >
                                            Orden
                                        </div>

                                        <div
                                            className="tooltip-option"
                                            onClick={() => handleOptionClick("Resultado")}
                                        >
                                            Resultado
                                        </div>
                                    </div>
                                )}
                                
                            </td>
                            <td>Nicolas Maduro Moros</td>
                            <td>Análisis de orina</td>
                            <td><span className="status status-completado">Completado</span></td>
                            <td>20/10/2022</td>
                            <td>8:00 am</td>
                        </tr>

                        {/* No2 */}
                        {/* Sangre */}
                        <tr>
                            <td
                                className="tooltip-container"
                            >

                                <span
                                    className="tooltip-button"
                                    onClick={() => handleTooltipClick("161FEBCM07027202", "sangre")}
                                >
                                    161FEBCM07027202
                                </span>

                                {tooltipVisible && selectediD === "161FEBCM07027202" && (
                                    <div className="tooltip-content">
                                        <div
                                            className="tooltip-option"
                                            onClick={() => handleOptionClick("Orden")}
                                        >
                                            Orden
                                        </div>

                                        <div
                                            className="tooltip-option"
                                            onClick={() => handleOptionClick("Resultado")}
                                        >
                                            Resultado
                                        </div>
                                    </div>
                                )}

                            </td>
                            <td>Nicolas Maduro Moros</td>
                            <td>Análisis de sangre</td>
                            <td><span className="status status-pendiente">Retrasado</span></td>
                            <td>20/10/2022</td>
                            <td>8:00 am</td>
                        </tr>
                        

                    </tbody>
                </table>

                {/* Aqui se abren la orden */}
                
                {/*{selectedOption === "Orden" && <Orden />} */}
                {isModalOpen && (
                    <div className="modal-container" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            {/* El caso si es orina */}
                            {selectedOption === "Resultado" && tipoExamen === "orina" && <ExOrina onClose={closeModal}/>}
                            {/* El caso si es sangre */}
                            {selectedOption === "Resultado" && tipoExamen === "sangre" && <ExSangre onClose={closeModal}/>}
                            
                            
                            {selectedOption === "Orden"  && <Orden ontipoExamenChange={handleTipoExamenChange} onClose={closeModal} />}
                        </div>
                    </div>
                )}

            </main>
        );
    };

    export default LabTable;