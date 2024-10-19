// resultadosLabCita.js

import React, { useState } from "react";
import HojaIdentificacion from "./hojaIdentificacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./resultadosLabCita.css";
import HistorialClinico from "./historialClinico";
import ExSangre from "../laboratory/ExSangre";
import "../laboratory/ExSangre.css"


export default function ResultadosLabCita({ closeTable }, {onClose}) {
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [mostrarIdenti, setMostrarIdentificacion] = useState(false);
  const [mostrarTablaSuperpuesta, setMostrarTablaSuperpuesta] = useState(false); // Estado para controlar la tabla superpuesta

  const toggleTablaSuperpuesta = () =>
    setMostrarTablaSuperpuesta(!mostrarTablaSuperpuesta); // Alternar tabla superpuesta

  // Nueva función para cerrar SOLO la tabla superpuesta
  const closeTablaSuperpuesta = () => setMostrarTablaSuperpuesta(false);

  const mostrarIdentificacion = () => {
    closeTablaSuperpuesta(); // Cierra tabla superpuesta
    setMostrarIdentificacion(true);
  }; // Mostrar la segunda hoja

  const mostrarHistorialCli = () => {
    setMostrarHistorial(true); // Mostrar la segunda hoja
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
            className="btn-hidentificacion-lab"
            onClick={mostrarIdentificacion}
          >
            Hoja de identificación
          </button>
          <button className="btn-historial-lab" onClick={mostrarHistorialCli}>
            Historial clínico
          </button>
          <button className="btn-resultados-lab">
            Resultados de laboratorio
          </button>
        </div>

        {mostrarIdenti && (
          <HojaIdentificacion closeTable={closeTable} /> // Cargar la segunda hoja
        )}

        {mostrarHistorial && (
          <HistorialClinico closeTable={closeTable} /> // Cargar la segunda hoja
        )}

        <div className="container-historial">
          <div className="header-title">Resultados de laboratorio</div>
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
              Tipo:
              <div style={{ fontWeight: "400", marginLeft: "6px" }}>Sangre</div>
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                marginLeft: "15px",
                display: "flex",
                marginTop: "6px",
              }}
            >
              Resultado:
              <div style={{ fontWeight: "400", marginLeft: "6px" }}>
                Infección renal
              </div>
            </div>
          </div>
          
          
          {mostrarTablaSuperpuesta && (
          <div className="Container-lab">

            <button className="close-button" onClick={closeTablaSuperpuesta}>
              X
            </button>
          <ExSangre onClick={onClose} />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
