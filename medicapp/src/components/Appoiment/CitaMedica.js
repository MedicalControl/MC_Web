import "./CitaMedica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import HojaIdentificacion from "./hojaIdentificacion";
import { createAppointment } from "../../controllers/attendappointmentController";
import { useNavigate } from "react-router-dom"; // Importa el hook

export default function CitaMedica() {

  const navigate = useNavigate();

  const [showTable, setShowTable] = useState(false);
  const [motivo, setMotivo] = useState(""); // Definir motivo
  const [sintomas, setSintomas] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [indicaciones, setIndicaciones] = useState("");


  const handleExpedienteClick = () => {
    setShowTable(true); // Mostrar la tabla al hacer clic en el botón
  };

  const closeTable = () => {
    setShowTable(false); // Ocultar la tabla
  };

  // Maneja el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página

    const tratamientos = [
      // Ejemplo de cómo manejar los tratamientos
      { nombre: "Paracetamol", cantidad: 2, frecuencia: "2 veces al día" },
      { nombre: "Ibuprofeno", cantidad: 1, frecuencia: "1 vez al día" }
    ];

    try {
      // Llamar al controlador que crea la cita
      await createAppointment(
        1, // `fk_agendacita`, lo puedes ajustar
        motivo,
        sintomas,
        diagnostico,
        indicaciones,
        tratamientos,
        navigate
      );
      alert("Consulta médica guardada correctamente");
    } catch (error) {
      console.error("Error al guardar la consulta médica", error);
      alert("Hubo un error al guardar la consulta médica");
    }
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
          <form onSubmit={handleSubmit}>
            <label className="label-CitaMedica">Motivo de consulta</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            ></textarea>

            <label className="label-CitaMedica">Síntomas</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>

            <label className="label-CitaMedica">Diagnóstico</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
              value={diagnostico}
              onChange={(e) => setDiagnostico(e.target.value)}
            ></textarea>

            <label className="label-CitaMedica">Indicaciones y Recomendaciones</label>
            <textarea
              cols="30"
              rows="10"
              className="textArea-CitaMedica"
              value={indicaciones}
              onChange={(e) => setIndicaciones(e.target.value)}
            ></textarea>

            <div className="btnSubmit-container">
              <input
                type="submit"
                value="Guardar consulta médica"
                className="btnSubmit-form"
              />
            </div>
          </form>
        </div>
      </div>
      {showTable && <HojaIdentificacion closeTable={closeTable} />}
    </div>
  );
}
