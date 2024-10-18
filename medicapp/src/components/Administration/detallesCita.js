import React, { useState } from "react";
import "./detallesCita.css";

export default function DetallesCita({ cita, closeTable, handleAccion }) {
    if (!cita) return null; // Asegúrate de que cita no sea null
  return (
    <div className="overlay-detalles">
      <div className="modal-table-detalles">
        <button className="close-button" onClick={closeTable}>
          X
        </button>
        <div className="header-expediente">
          <div style={{ padding: "30px" }}>Detalles de la cita</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div
            style={{ color: "#757575", fontWeight: "600", fontSize: "18px" }}
          >
            Paciente
            <div
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              {cita.paciente}
            </div>
          </div>

          <div
            style={{ color: "#757575", fontWeight: "600", fontSize: "18px", marginRight: '20px'}}
          >
            Fecha
            <div
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              {cita.fecha}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "20px",
          }}
        >
          <div
            style={{ color: "#757575", fontWeight: "600", fontSize: "18px" }}
          >
            Hora

            <div style={{ color: "black", fontWeight: "600", fontSize: "18px", marginTop: '10px' }}>
                {cita.hora}
              </div>

          </div>
          <div
            style={{ color: "#757575", fontWeight: "600", fontSize: "18px" }}
          >
            Motivo

            <div style={{ color: "black", fontWeight: "600", fontSize: "18px", marginTop: '10px' }}>
                {cita.motivo}
              </div>

          </div>
        </div>

        <div className="btns-bottom">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "100px",
                background: "#31D175",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div style={{ color: "white", marginLeft: "20px" }}  onClick={() => handleAccion(cita.id, "aprobar")} >Aprobar</div>
            </div>

            <div
              style={{
                width: "100px",
                background: "#FF4D4D",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div style={{ color: "white", marginLeft: "20px" }}  onClick={() => handleAccion(cita.id, "negar")} >Negar</div>
            </div>

            <div
              style={{
                width: "130px",
                background: "#2AB9B7",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div style={{ color: "white", marginLeft: "20px" }} onClick={() => handleAccion(cita.id, "reprogramar")} >
                Reprogramar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
