// hojaIdentificacion.js
import React, { useState } from "react";
import "./HojaIdentificacion.css"; // Estilos específicos para esta tabla
import SegundaHoja from "./SegundaHoja.js";
import HistorialClinico from "./historialClinico.js";
import ResultadosLabCita from "./resultadosLabCita.js";

export default function HojaIdentificacion({ closeTable }) {
    const [mostrarHistorial, setMostrarHistorial] = useState(false); 
    const [mostrarResultados, setMostrarResultados] = useState(false); // Nuevo estado

    const [mostrarSegundaHoja, setMostrarSegundaHoja] = useState(false); // Estado para controlar la visibilidad de la segunda hoja

    const mostrarPrimeraHoja = () => setMostrarSegundaHoja(false); // Volver a la primera hoja
    const mostrarSegunda = () => setMostrarSegundaHoja(true); // Mostrar la segunda hoja

    const mostrarIdentificacion = () => setMostrarHistorial(true); // Mostrar la segunda hoja
    const mostrarHistorialCli = () => setMostrarHistorial(true); // Mostrar la segunda hoja


    const mostrarResultadosLaboratorio = () => {
      setMostrarResultados(true);
      setMostrarHistorial(false); // Cerrar historial si está abierto
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
          <button className="btn-hidentificacion">
            Hoja de identificación
          </button>
          <button className="btn-historial" onClick={mostrarHistorialCli} >Historial clínico</button>
          <button className="btn-resultados" onClick={mostrarResultadosLaboratorio} >Resultados de laboratorio</button>
        </div>
        {mostrarHistorial && (
                <HistorialClinico closeTable={closeTable}
                /> // Cargar la segunda hoja
        )}
        
        {mostrarResultados && (
          <ResultadosLabCita closeTable={closeTable} />
        )}
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
              {/* Mostrar la imagen solo si no se está mostrando la segunda hoja */}
          {!mostrarSegundaHoja && (
            <div className="patient-imageGeneric">
              <img src="/patients/patientGeneric.png" alt="Imagen del paciente" />
            </div>
          )}
            <div className="contenido-expediente">
              {mostrarSegundaHoja ? (
                <SegundaHoja /> // Cargar la segunda hoja
              ) : (
                <PrimeraHoja /> // Mostrar la primera hoja
              )}
            </div>
          </div>
        </div>
           {/* Mover el botón de cambio de página al final */}
    <div className="boton-cambio-pagina">
      {mostrarSegundaHoja ? (
        <button onClick={mostrarPrimeraHoja} className="atrasBtn" >Atrás</button>
      ) : (
        <button onClick={mostrarSegunda} className="siguienteBtn" >Siguiente</button>
      )}
    </div>
      </div>
    </div>
  );
}

function PrimeraHoja() {
  return (
    <div className="data-identificacion">
      <div style={{ marginLeft: "99px" }}>
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
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ marginTop: "10px" }}>No. de cédula:</label>
            </div>
            <input
              type="text"
              name="cedula"
              style={{
                width: "10px",
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
              }}
            />
            <label style={{ marginTop: "10px", marginLeft: "5px" }}>
              Edad:
            </label>
            <input
              type="text"
              name="edad"
              style={{
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
                width: "15px",
              }}
            />
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
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <div style={{ display: "flex", marginTop: "1px" }}>
          <div>
            <label style={{ marginTop: "10px" }}>Estado civil:</label>
          </div>
          <input
            type="text"
            name="cedula"
            style={{
              width: "100px",
              marginLeft: "10px",
              borderBottom: "1px solid #c5c5c5",
            }}
          />
          <label style={{ marginTop: "10px", marginLeft: "5px" }}>
            Ocupación u oficio
          </label>
          <input
            type="text"
            name="edad"
            style={{
              marginLeft: "10px",
              borderBottom: "1px solid #c5c5c5",
              width: "15px",
            }}
          />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", marginTop: "1px" }}>
          <div>
            <label style={{ marginTop: "10px" }}>
              Dirección de residencia:
            </label>
          </div>
          <input
            type="text"
            name="cedula"
            style={{
              width: "100px",
              marginLeft: "10px",
              borderBottom: "1px solid #c5c5c5",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ marginTop: "10px" }}>Departamento:</label>
            </div>
            <input
              type="text"
              name="cedula"
              style={{
                width: "10px",
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
              }}
            />
            <label style={{ marginTop: "10px", marginLeft: "5px" }}>
              Municipio:
            </label>
            <input
              type="text"
              name="edad"
              style={{
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
                width: "15px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ marginTop: "10px" }}>Teléfono:</label>
            </div>
            <input
              type="text"
              name="cedula"
              style={{
                width: "10px",
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
              }}
            />
            <label style={{ marginTop: "10px", marginLeft: "5px" }}>
              Celular:
            </label>
            <input
              type="text"
              name="edad"
              style={{
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
                width: "15px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ marginTop: "10px" }}>Nombre de la madre:</label>
            </div>
            <input
              type="text"
              name="cedula"
              style={{
                width: "10px",
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
              }}
            />
            <label style={{ marginTop: "10px", marginLeft: "5px" }}>
              Nombre del padre:
            </label>
            <input
              type="text"
              name="edad"
              style={{
                marginLeft: "10px",
                borderBottom: "1px solid #c5c5c5",
                width: "15px",
              }}
            />
          </div>
        </div>
        <div style={{ height: "100px" }}>
          <div style={{ fontWeight: "600" }}>
            Enfermades Infecto - contagiosas:
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // Permite que los elementos pasen a la siguiente línea
              gap: "5px", // Espacio entre elementos
              maxWidth: "690px", // Ancho máximo opcional para que salten de línea
            }}
          >
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="diabetes" />
                Hepatitis
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="enfermedades"
                  value="hipertension"
                />
                Sifilis
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="asma" />
                TB
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="alergias" />
                Cólera
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Amebiasis
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Tosferina
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Sarampión
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Meningitis
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Rubeola
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Parotiditis
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Impétigo
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Fiebre
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Tifoidea
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Escarlatina
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Malaria
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Escabiosis
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Pediculosis
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Tiña
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Otros
              </label>
            </div>
          </div>
        </div>
        <div style={{ height: "100px", marginTop: "10px" }}>
          <div style={{ fontWeight: "600" }}>Enfermades hereditarias:</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // Permite que los elementos pasen a la siguiente línea
              gap: "5px", // Espacio entre elementos
              maxWidth: "690px", // Ancho máximo opcional para que salten de línea
            }}
          >
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="diabetes" />
                Alergias
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="enfermedades"
                  value="hipertension"
                />
                Diabeter mellitus
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="asma" />
                Hipertension arterial
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="alergias" />
                Enfermedad reumática
              </label>
            </div>

            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermedades renales
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermedades oculares
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermedades cardíacas
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermerdad hepática
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermedades musculares
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Malformaciones congénitas
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Desórdenes mentales
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Enfermedades degenerativas del sistema nervioso central
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Anomalías del crecimiento y desarrollo
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Errores innatos del metabolismo
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" />
                Otros
              </label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
