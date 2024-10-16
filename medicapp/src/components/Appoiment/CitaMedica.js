import "./CitaMedica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import HojaIdentificacion from "./hojaIdentificacion";


export default function CitaMedica() {
  const [showTable, setShowTable] = useState(false); // Estado para controlar la visibilidad

  const handleExpedienteClick = () => {
    setShowTable(true); // Mostrar la tabla al hacer clic en el botón
  };

  const closeTable = () => {
    setShowTable(false); // Ocultar la tabla
  };

  return (
    <div className="Content-CitaMedica">
      <div className="Container-CitaMedica">
        <div className="header-CitaMedica">
          <div className="data-patient">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  borderRadius: "49px",
                  backgroundColor: "#2AB9B7",
                  width: "60px",
                  height: "60px",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    fontSize: "35px",
                    color: "white",
                    display: "flex",
                    justifyContent: "Center",
                    marginTop: "5px",
                  }}
                >
                  YD
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "22px" }}>
              <div style={{ fontSize: "28px", fontWeight: "600" }}>
                Yasser Darce
              </div>
              <p style={{ fontSize: "15px" }}>Expediente: 292624450</p>
              <p style={{ fontSize: "15px" }}>22 años - Masculino</p>
            </div>
          </div>
          <div className="Container-btnExpediente">
            <button className="btn-Expediente" onClick={handleExpedienteClick}>
              <FontAwesomeIcon
                icon={faPaste}
                style={{ marginRight: "8px", fontSize: "16px" }}
              />
              Expediente
            </button>
          </div>
        </div>
        <div className="line-header">
          <hr style={{ color: "#DFDFDF" }} />
        </div>

        <div className="form">
          <form>
            <label className="label-CitaMedica">Motivo de consulta</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
            ></textarea>
            <label className="label-CitaMedica">Sintomas</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
            ></textarea>
            <label className="label-CitaMedica">Diagnóstico</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
            ></textarea>
            <label className="label-CitaMedica">
              Indicaciones y Recomendaciones
            </label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
            ></textarea>
            <div className="btnSubmit-container">
              <input
                type="submit"
                value="Guardar consulta medica"
                className="btnSubmit-form"
              />
            </div>
          </form>
        </div>
      </div>
      {showTable && <HojaIdentificacion closeTable={closeTable} />}</div>
  );
}
