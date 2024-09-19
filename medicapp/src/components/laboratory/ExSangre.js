import React, { useState } from "react";
import "./ExSangre.css";

const ExSangre = ( {onClose} ) => {

    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleRightClick = () => {
        setIsCardVisible(true);
    }

    const handleLeftClick = () => {
        setIsCardVisible(false);
    }

    const handleClose = () => {
        setIsCardVisible(false);
    }

    return (
        <div className="card-examen">
            <div className="card-header-examen">
                <div className="card-title-examen">
                    <svg className="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M202.412 21.06c-2.189.065-4.715.577-7.795 1.643C149.244 38.411 80.172 79.747 18.965 98.262c10.858 6.727 22.689 12.663 34.941 17.37 13.696-6.286 27.073-12.537 38.414-18.808 13.887-7.678 24.612-15.672 29.078-22.199l13.204 9.035c-7.33 10.712-19.785 19.009-34.54 27.166-7.337 4.057-15.276 8.01-23.468 11.904 7.515 1.809 15.064 3.09 22.533 3.707 3.378.28 6.732.43 10.057.456 15.845-9.826 30.838-22.51 35.67-31.631l14.138 7.488c-3.464 6.54-8.679 12.826-14.933 18.695 15.63-5.498 29.79-15.436 41.54-31.103l7.235-9.647 6.076 10.416c4.704 8.064 11.043 14.811 18.235 20.618 5.332-.816 10.034-1.374 14.855-1.649V79.084c-9.7-7.317-16-18.93-16-31.941a39.612 39.612 0 0 1 3.068-15.305c-2.539-3.553-5.16-6.348-7.793-8.072-2.172-1.423-4.325-2.385-6.941-2.643a15.694 15.694 0 0 0-1.922-.063zm106.258 0c-.342.01-.677.03-1.004.063-2.616.258-4.769 1.22-6.941 2.643-2.634 1.724-5.254 4.52-7.793 8.072A39.612 39.612 0 0 1 296 47.143c0 13.011-6.3 24.624-16 31.941v30.996c5.003.289 10.454.932 14.855 1.649 7.192-5.807 13.531-12.554 18.235-20.618l6.076-10.416 7.234 9.647c11.75 15.667 25.911 25.605 41.541 31.103-6.254-5.869-11.47-12.155-14.933-18.695l14.138-7.488c4.832 9.122 19.825 21.805 35.67 31.63a134.06 134.06 0 0 0 10.057-.454c7.47-.619 15.018-1.9 22.533-3.708-8.192-3.894-16.131-7.847-23.469-11.904-14.754-8.157-27.208-16.454-34.539-27.166l13.204-9.035c4.466 6.527 15.19 14.521 29.078 22.2 11.34 6.27 24.718 12.52 38.414 18.808 12.252-4.708 24.083-10.644 34.941-17.371-61.207-18.515-130.279-59.85-175.652-75.559-3.52-1.219-6.317-1.711-8.713-1.642zM256 24c-13.35 0-24 10.65-24 24s10.65 24 24 24 24-10.65 24-24-10.65-24-24-24zm-8 62.332v24.64c2.793.606 5.759 1.61 8 2.89 2.681-1.483 5.28-2.266 8-2.89v-24.64c-2.587.53-5.263.81-8 .81s-5.413-.28-8-.81zm-12.547 39.654a76.025 76.025 0 0 0-4.674.2c-12.862.942-28.802 5.08-35.353 8.185-14.907 7.066-21.148 13.791-24.215 19.988-3.067 6.198-3.211 12.802-3.211 20.784 0 9.333 4.299 16.218 12.146 22.812 7.848 6.594 19.157 12.141 30.8 16.75 21.493 11.283 44.162 22.942 62.048 35.984 4.915 3.475 11.183 5.658 15.998 8.178 4.717-4.959 7.008-9.53 7.008-13.724 0-2.5-.667-5.262-1.893-8.182-12.214-23.082-35.176-34.215-59.312-47.52l-.057.063c-10.371-4.023-20.014-6.361-26.738-6.361l-3.578-15.157c15.833-7.916 27.435-14.553 34.338-20.877 6.756-6.188 9.266-11.253 9.209-19.312-4.007-1.756-8.557-1.851-12.516-1.81zm41.094 0c-4.174.141-9.299.064-12.516 1.81-.057 8.06 2.453 13.125 9.21 19.313 6.902 6.324 18.504 12.961 34.337 20.877L304 183.143c-7.963 0-20.012 3.269-32.525 8.744 10.05 6.432 19.599 13.926 27.498 23.611.695-.268 1.387-.518 2.082-.793 11.642-4.609 22.95-10.156 30.799-16.75C339.7 191.361 344 184.475 344 175.143c0-7.982-.144-14.586-3.21-20.784-3.068-6.197-9.309-12.922-24.216-19.988-6.55-3.105-22.491-7.243-35.353-8.185a75.995 75.995 0 0 0-4.674-.2zM256 151.77a49.262 49.262 0 0 1-6.434 7.138c-.508.466-1.035.926-1.566 1.383v17.15a160.265 160.265 0 0 1 8.008 3.92 163.653 163.653 0 0 1 7.992-3.92v-17.15a68.078 68.078 0 0 1-1.566-1.383A49.264 49.264 0 0 1 256 151.77zm-37.537 83.896c-1.594 3.4-2.463 6.61-2.463 9.477 0 4.833 3.03 10.165 9.322 16.015 6.292 5.85 15.368 11.666 24.686 17.06 9.318 5.395 18.832 10.38 26.472 15.339 3.82 2.48 7.189 4.92 9.995 7.81 2.806 2.89 5.525 6.609 5.525 11.776 0 4.25-2.151 8.289-4.693 10.804-2.543 2.516-5.357 4.063-8.274 5.467-2.293 1.104-4.71 2.104-7.16 3.098 6.558 4.82 12.595 10.053 17.467 15.232 2.72-1.247 5.468-2.497 8.181-3.807 6.982-3.37 13.564-7.126 17.93-11.242 4.367-4.115 6.549-7.97 6.549-13.552 0-9.945-3.598-17.446-9.586-24.297-5.988-6.852-14.492-12.712-23.363-17.746-8.87-5.035-17.995-9.213-25.438-13.438-3.721-2.112-7.045-4.194-9.908-6.88-.146-.138-.29-.291-.435-.434-10.483-7.04-23.998-15.262-34.807-20.682zm2.406 42.647c-8.107 4.759-15.766 10.22-21.283 16.533-5.988 6.85-9.586 14.352-9.586 24.297 0 5.583 2.182 9.437 6.549 13.552 4.366 4.116 10.948 7.872 17.93 11.243 2.64 1.274 5.3 2.493 7.94 3.708 19.051 9.787 36.7 19.107 53.985 23.813 4.034-1.373 4.848-5.133 3.936-9.729-14.856-14.943-29.808-23.803-47.373-32.316-2.917-1.404-5.731-2.951-8.274-5.467-2.542-2.515-4.693-6.554-4.693-10.804 0-5.167 2.72-8.885 5.525-11.776 2.806-2.89 6.174-5.33 9.995-7.81a158.19 158.19 0 0 1 4.373-2.721c-6.53-3.83-13.092-7.935-19.024-12.524zM256 299.998c-2.85 1.615-5.56 3.17-8 4.64v13.602c.75.346 1.504.714 2.258 1.082 1.845.76 3.75 1.558 5.74 2.461 2.81-1.274 5.521-2.389 8.002-3.388v-13.756a336.594 336.594 0 0 0-8-4.641zm-17.795 73.816c.588 4.245 2.564 8.12 5.824 12.147 3.933 4.857 9.67 9.59 15.723 14.059 6.053 4.469 12.365 8.641 17.643 13.166 5.277 4.524 10.605 9.79 10.605 17.957 0 9.9-5.82 17.934-12.969 27-7.148 9.065-16.35 18.536-25.51 27.273-2.047 1.953-3.986 3.667-6.005 5.53 8.23-4.31 16.77-9.533 24.816-15.385C290.729 459.27 308 437.905 308 423.143c0-4.467-1.67-8.043-4.982-11.957-3.312-3.915-8.27-7.772-13.592-11.48-5.322-3.71-10.947-7.234-15.762-11.368-.558-.48-1.115-.98-1.666-1.494-12.987-3.453-23.893-8.06-33.793-13.03zm-7.873 20.582c-2.574 1.786-5.2 3.527-7.758 5.31-5.321 3.708-10.28 7.565-13.592 11.48-3.311 3.914-4.982 7.49-4.982 11.957 0 7.314 3.964 16.342 11.316 25.61 6.386 8.05 15.135 16.148 24.827 23.481a384.732 384.732 0 0 0 5.076-4.976c-2.796-3.028-5.456-6.053-7.871-9.033C230.003 449.162 224 441.16 224 431.143c0-8.167 5.328-13.433 10.605-17.957 2.485-2.13 5.21-4.181 8.018-6.223-3.918-3.258-7.718-6.846-11.027-10.934-.431-.532-.85-1.079-1.264-1.633zm25.662 22.666c-2.896 2.081-5.66 4.071-7.994 5.872v22.921c.565.76 1.152 1.525 1.777 2.297 1.95 2.407 4.133 4.909 6.467 7.457 2.24-2.519 4.349-4.995 6.225-7.375.536-.68 1.04-1.353 1.531-2.023v-23.277c-2.346-1.81-5.09-3.778-8.006-5.872z"/></svg>
                    <div className="examen">
                        Resultados de examen
                    </div>
                    <img src="medicallogo2.png" className="logo" alt="Logo" />
                </div>

                {/* Icono de cerrar */}
                <svg className="icon-close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ff0000"/> </g>

                </svg>

            </div>

            <div className="card-content">
                {isCardVisible ? (
                    <>    
                        <table className="table-fisico table-plaquetaria">
                            <thead>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell table-title" colSpan={3}>
                                        Serie plaquetaria
                                    </th>
                                </tr>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell">
                                        Parámetro
                                    </th>
                                    <th className="table-fisico-header table-fisico-cell">
                                        Resultado
                                    </th>
                                    <th className="table-fisico-header table-fisico-cell">
                                        Valor de referencia
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Plaquetas
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        -
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        -
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Volumen Plaquetario Medio (VPM)
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        262.0 x 10^3/mm3
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        140-440
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Plaquetocrito
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        7.8fl
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        7.4-11.0
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <table className="table-fisico table-plaquetaria">
                            <thead>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell table-title" colSpan={2}>
                                        Fórmula blanca
                                    </th>
                                </tr>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell">
                                        Cualitativo
                                    </th>
                                    <th className="table-fisico-header table-fisico-cell">
                                        Cuantitativo
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        e
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        asas
                                    </td>
                                </tr>


                            </tbody>
                        </table>

                        <div className="firma">
                            <img src="/logofirma.png" alt="firma" className="firma-imagen"/>
                            <div className="firma-texto"><strong>Firma Laboratorista:</strong> _________</div>
                            <div className="fecha-texto"><strong>Fecha de entrega:</strong> 20/02/2024</div>

                        </div>

                        <div className="before">
                            <svg className="icon-left" onClick={handleLeftClick} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#000000"/> </g>

                            </svg>
                        </div>
                    </>
                    
                ) : (
                    <>
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <td><strong>1er Apellido:</strong> Darce</td>
                                    <td><strong>1er Nombre:</strong> Yasser</td>
                                    <td><strong>Edad:</strong> 19 años</td>
                                    <td><strong>Hora:</strong> 2:10pm</td>
                                </tr>
                                <tr>
                                    <td><strong>2do Apellido:</strong> Mairena</td>
                                    <td><strong>2do Nombre:</strong> José</td>
                                    <td><strong>Localidad:</strong> C. Sandino</td>
                                </tr>
                                <tr>
                                    <td><strong>Informe:</strong> Nose</td>
                                    <td><strong>No. de Expediente:</strong> 2002ADA</td>
                                    <td><strong>Establecimiento:</strong> A#2340-C</td>
                                </tr>
                                <tr>
                                    <td><strong>Consulta Externa:</strong> ☐</td>
                                    <td><strong>Emergencia:</strong> ☐</td>
                                    <td><strong>Fecha:</strong> 09/12/24</td>

                                </tr>

                            </tbody>
                        </table>

                        <table className="table-fisico">
                            <thead>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell table-title" colSpan={3}>
                                        Formula roja
                                    </th>
                                </tr>
                                <tr className="table-fisico-head">
                                    <th className="table-fisico-header table-fisico-cell">
                                        Parámetro
                                    </th>
                                    <th className="table-fisico-header table-fisico-cell">
                                        Resultado
                                    </th>
                                    <th className="table-fisico-header table-fisico-cell">
                                        Valor de referencia
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Eritrocitos
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        4.20 mill/ul
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        3.8-5.8
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Hemoglobina
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        12.7 gr/dL
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        12-15
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Hematrocito
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        37.4%
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        33.0-44.0
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Volumen globular Medio
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        89.0 fL
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        83-100
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Conc. Media de HB
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        30.3 pg
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        28-32
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Conc. Media de HB Corpuscular
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        34.1 gr/dL
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        32-36
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Índice de Distribución de Eritrocitos CV(RDW-CV)
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        10.7 fl
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        10.0-14.0
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table-fisico-body-cell table-fisico-cell cell-bold">
                                        Índice de Distribución de Eritrocitos CV(RDW-SD)
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        -
                                    </td>
                                    <td className="table-fisico-body-cell table-fisico-cell">
                                        -
                                    </td>
                                </tr>

                            </tbody>
                        </table>


                        <div className="next">
                            <svg className="icon-next" width="40px" height="40px" onClick={handleRightClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#000000"/> </g>

                            </svg>
                        </div>

                    </>
                )}


            </div>
        </div>

    );
};

export default ExSangre;