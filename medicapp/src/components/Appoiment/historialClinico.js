// historialClinico.js

import React, { useState } from "react";
import "./historialClinico.css"; // Estilos específicos para esta tabla
import HojaIdentificacion from "./hojaIdentificacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import ResultadosLabCita from "./resultadosLabCita";

export default function HistorialClinico({ closeTable }) {
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [mostrarLab, setMostrarLab] = useState(false);
  const [mostrarTablaSuperpuesta, setMostrarTablaSuperpuesta] = useState(false); // Estado para controlar la tabla superpuesta

  const toggleTablaSuperpuesta = () =>
    setMostrarTablaSuperpuesta(!mostrarTablaSuperpuesta); // Alternar tabla superpuesta

  // Nueva función para cerrar SOLO la tabla superpuesta
  const closeTablaSuperpuesta = () => setMostrarTablaSuperpuesta(false);

  const mostrarIdentificacion = () => {
    closeTablaSuperpuesta(); // Cierra tabla superpuesta
    setMostrarHistorial(true);
  }; // Mostrar la segunda hoja


  const mostrarLabs = () => {
    closeTablaSuperpuesta(); // Cierra tabla superpuesta
    setMostrarLab(true);
  }; // Mostrar la segunda hoja

  const mostrarHistorialCli = () => setMostrarHistorial(true); // Mostrar la segunda hoja

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
          <button className="btn-resultados" onClick={mostrarLabs} >Resultados de laboratorio</button>
        </div>

        {mostrarHistorial && (
          <HojaIdentificacion closeTable={closeTable} /> // Cargar la segunda hoja
        )}

      {mostrarLab && (
          <ResultadosLabCita closeTable={closeTable} /> // Cargar la segunda hoja
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
                marginTop: '6px',

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
            <button className="close-button" onClick={closeTablaSuperpuesta}>
              X
            </button>
            <div style={{ width: "600px" }}>
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
              <div className="infoPrincipal" style={{ marginLeft: "22px" }}>
                <div>
                  <div
                    style={{
                      fontSize: "17px",
                      marginTop: "15px",
                      fontWeight: "600",
                    }}
                  >
                    I. Datos personales
                  </div>
                </div>
                <div style={{ width: "95%", marginTop: "10px" }}>
                  <div style={{ display: "flex" }}>
                    <label style={{ fontSize: "13px", fontWeight: "500" }}>
                      Nombres y apellidos:
                    </label>
                    <input
                      type="text"
                      style={{ height: "10px", width: "10px" }}
                    />
                  </div>
                </div>

                <div style={{ width: "95%", display: "flex" }}>
                  <div style={{ display: "flex" }}>
                    <label>
                      Fecha de nacimiento
                      <input type="date" required style={{ width: "110px" }} />
                    </label>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <label>
                      Edad
                      <input type="text" required style={{ width: "20px" }} />
                    </label>
                  </div>
                  <div>
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                      <label style={{ marginTop: "5px", marginLeft: "5px" }}>
                        Sexo:
                      </label>

                      <div
                        style={{
                          marginTop: "5px",
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
                </div>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex" }}>
                    <label>
                      Estado civil:
                      <input type="text" required />
                    </label>
                    <label>
                      Ocupación u oficio:
                      <input type="text" required style={{ width: "185px" }} />
                    </label>
                  </div>
                </div>
                <div style={{ width: "94%" }}>
                  <div style={{ display: "flex" }}>
                    <label>Dirección de domicilio:</label>
                    <input type="text" required />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
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
                  <div style={{ fontSize: "17px", fontWeight: "600" }}>
                    II. Motivo de consulta
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="text" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "600" }}>
                    III. Sintomas
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="text" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "600" }}>
                    IV. Diagnóstico
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="text" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "600" }}>
                    V. Indicaciones y recomendaciones
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="text" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <div style={{ marginTop: "50px" }}>
                    <input
                      type="text"
                      style={{
                        marginLeft: "10px",
                        borderBottom: "1px solid rgb(197, 197, 197)",
                        width: "300px",
                      }}
                    />
                    <label>
                      Nombre, firma, código y sello del médico encargado
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
