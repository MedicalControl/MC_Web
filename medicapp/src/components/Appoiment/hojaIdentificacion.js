import React from "react";
import "./HojaIdentificacion.css"; // Estilos específicos para esta tabla

export default function HojaIdentificacion({ closeTable }) {
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
          <button className="btn-hidentificacion">
            Hoja de identificación
          </button>
          <button className="btn-historial">Historial clínico</button>
          <button className="btn-resultados">Resultados de laboratorio</button>
        </div>
        <div className="container-hidentificacion">
          <div className="header-hidentificacion">
            <img src="medicallogo2.png" alt="Logo" width={120} height={50} />
            <div style={{ fontSize: "20px", fontWeight: "600" }}>
              Hoja de Identificación Clínica
            </div>
            <img src="pngwing.com 1.png" alt="Logo" width={75} height={50} />
          </div>
          <div className="box-container-header">
            <div>Fecha:</div>
            <div className="container-box-expediente">
              <p style={{ marginLeft: "10px" }}>Expediente: 29294ASD</p>
            </div>
          </div>
          <div className="datos-formulario">
            <div className="patient-imageGeneric">
              <img src="/patients/patientGeneric.png" />
            </div>
            <div className="data-identificacion">
              <div style={{ display: "flex" }}>
                <label style={{ width: "140px", marginTop: "10px" }}>
                  Nombres y apellidos:
                </label>
                <input
                  type="text"
                  name="nombres"
                  style={{ borderBottom: "1px solid #c5c5c5" }}
                />
              </div>
              <div>
                <div style={{ display: "flex", marginTop: "17px" }}>
                  <div>
                    <label>No. de cédula:</label>
                  </div>
                  <input type="text" name="cedula" style={{width: '100px'}} />
                  <label>Edad:</label>
                  <input type="text" name="edad" />
                  <label>Sexo:</label>
                  <label>
                    <input type="radio" name="sexo" value="M" /> M
                  </label>
                  <label>
                    <input type="radio" name="sexo" value="F" /> F
                  </label>
                </div>
              </div>
              <button type="submit">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
