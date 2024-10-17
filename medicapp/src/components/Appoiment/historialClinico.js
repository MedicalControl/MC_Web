import React, { useState } from "react";
import "./historialClinico.css"; // Estilos específicos para esta tabla
import HojaIdentificacion from "./hojaIdentificacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function HistorialClinico({ closeTable }) {
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [mostrarTablaSuperpuesta, setMostrarTablaSuperpuesta] = useState(false); // Estado para controlar la tabla superpuesta

  const mostrarIdentificacion = () => setMostrarHistorial(true); // Mostrar la segunda hoja
  const mostrarHistorialCli = () => setMostrarHistorial(true); // Mostrar la segunda hoja

  const toggleTablaSuperpuesta = () => {
    setMostrarTablaSuperpuesta(!mostrarTablaSuperpuesta); // Cambiar el estado de la tabla superpuesta
  };

  return (
    <div className="overlay">
      <div className="modal-table">
        <button className="close-button" onClick={closeTable}>
          X
        </button>
        <div className="header-expediente">
          <div style={{ padding: "30px" }}>Expediente del Paciente</div>
        </div>
        <div className="btns-expediente">
          <button
            className="btn-hidentificacion-h"
            onClick={mostrarIdentificacion}
          >
            Hoja de identificación
          </button>
          <button className="btn-historial-h">Historial clínico</button>
          <button className="btn-resultados">Resultados de laboratorio</button>
        </div>

        {mostrarHistorial && (
          <HojaIdentificacion closeTable={closeTable} /> // Cargar la segunda hoja
        )}
        <div className="container-historial">
          <div className="header-title">Historial de consultas</div>
          <div className="box-cita" onClick={toggleTablaSuperpuesta}>
            <div
              className="date"
              style={{ padding: "10px", fontSize: "13px", fontWeight: "600" }}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                style={{
                  marginLeft: "8px",
                  marginRight: "6px",
                  fontSize: "13px",
                  color: "#2AB9B7",
                }}
              />
              15 de septiembre, 2024
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                marginLeft: "15px",
                display: "flex",
              }}
            >
              Motivo:
              <div style={{ fontWeight: "400", marginLeft: "6px" }}>
                Control de rutina
              </div>
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                marginLeft: "15px",
                display: "flex",
              }}
            >
              Diagnóstico:
              <div style={{ fontWeight: "400", marginLeft: "6px" }}>
                Paciente en buen estado general
              </div>
            </div>
          </div>
        </div>

        {/* Tabla superpuesta */}
        {mostrarTablaSuperpuesta && (
          <div className="tabla-superpuesta">
            <div style={{width: '600px'}}>
              <div className="header-hidentificacion">
                <img
                  src="medicallogo2.png"
                  alt="Logo"
                  width={120}
                  height={50}
                />
                <div style={{ fontSize: "20px", fontWeight: "600" }}>
                  Cita médica
                </div>
                <img
                  src="pngwing.com 1.png"
                  alt="Logo"
                  width={75}
                  height={50}
                />
              </div>
              <div className="box-container-header">
                <table className="table-cita">
                  <thead>
                    <tr>
                      <th>
                        Nombre del establecimiento de salud:
                        <input type="text" />
                      </th>
                      <th>
                        Motivo
                        <input type="text" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Fecha y hora
                        <input type="text" />
                      </td>
                      <td>
                        Servicio y sala
                        <input type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="infoPrincipal">
                <div>
                  <h2>I. Datos personales</h2>
                </div>
                <div style={{ display: "flex" }}>
                  <label>
                    Nombres y apellidos:
                    <input type="text" required />
                  </label>
                </div>
                <div style={{ display: "flex" }}>
                  <label>
                    Fecha de nacimiento
                    <input type="date" required />
                  </label>
                  <label>
                    Edad
                    <input type="text" required />
                  </label>
                  <div style={{ display: "flex" }}>
                    <label style={{ marginTop: "10px", marginLeft: "5px" }}>
                      Sexo:
                    </label>

                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        marginLeft: "10px",
                      }}
                    >
                      <label style={{ marginLeft: "10px" }}>
                        M
                        <input
                          type="radio"
                          name="sexo"
                          value="M"
                          style={{ marginLeft: "10px" }}
                        />
                      </label>
                      <label style={{ marginLeft: "10px" }}>
                        F
                        <input
                          type="radio"
                          name="sexo"
                          value="F"
                          style={{ marginLeft: "10px" }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex'}} >
                  <label>
                    Estado civil:
                    <input type="text" required />
                  </label>
                  <label>
                    Ocupación u oficio:
                    <input type="text" required />
                  </label>
                </div>
                <div style={{display: 'flex'}} >
                  <label>
                   Dirección de domicilio:
                    <input type="text" required />
                  </label>
                </div>
                <div style={{display: 'flex'}} >
                  <label>
                    Teléfono de contacto:
                    <input type="text" required />
                  </label>
                  <label>
                    No de Cédula:
                    <input type="text" required />
                  </label>
                </div>
                <div>
                  <h2>II. Motivo de consulta</h2>
                </div>
                <div style={{ display: "flex" }}>
                 <input type="text" />
                </div>
                <div>
                  <h2>III. Sintomas</h2>
                </div>
                <div style={{ display: "flex" }}>
                 <input type="text" />
                </div>
                <div>
                  <h2>IV. Diagnóstico</h2>
                </div>
                <div style={{ display: "flex" }}>
                 <input type="text" />
                </div>
                <div>
                  <h2>V. Indicaciones y recomendaciones</h2>
                </div>
                <div style={{ display: "flex" }}>
                 <input type="text" />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop: '50px', }} >
                    <input type="text" style={{marginLeft: '10px',borderBottom: '1px solid rgb(197, 197, 197)', width: '300px'}}  />
                    <label>Nombre, firma, código y sello del médico encargado</label>
                </div>
                </div>
              </div>
            </div>
            {/* Aquí puedes agregar el contenido de tu tabla */}
          </div>
        )}
      </div>
    </div>
  );
}
