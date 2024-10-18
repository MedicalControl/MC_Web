import React, { useState } from "react";
import "./panelAdmin.css";
import DetallesCita from "./detallesCita";
import CitasAprobadas from "./citasAprobadas";

const PanelAdmin = () => {
  const [mostrarApro, setMostrarApro] = useState(false);

  const mostrarAprobadas = () => {
    setMostrarApro(true); // Cerrar historial si está abierto
  };

  const [citas, setCitas] = useState([
    {
      id: "1",
      paciente: "Juan Pérez",
      fecha: "2024-10-18",
      hora: "09:00",
      motivo: "Dolor de cabeza",
      estado: "pendiente",
    },
    {
      id: "2",
      paciente: "María García",
      fecha: "2024-10-19",
      hora: "10:30",
      motivo: "Control rutinario",
      estado: "pendiente",
    },
    {
      id: "3",
      paciente: "Carlos Rodríguez",
      fecha: "2024-10-20",
      hora: "11:00",
      motivo: "Dolor de espalda",
      estado: "pendiente",
    },
    {
      id: "4",
      paciente: "Ana Martínez",
      fecha: "2024-10-21",
      hora: "14:00",
      motivo: "Consulta dermatológica",
      estado: "aprobada",
    },
    {
      id: "5",
      paciente: "Luis Sánchez",
      fecha: "2024-10-22",
      hora: "16:30",
      motivo: "Revisión oftalmológica",
      estado: "negada",
    },
  ]);

  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [showTable, setShowTable] = useState(false); // Estado para controlar la visibilidad

  const handleAccion = (id, accion) => {
    setCitas(
      citas.map((cita) =>
        cita.id === id
          ? {
              ...cita,
              estado:
                accion === "aprobar"
                  ? "aprobada"
                  : accion === "negar"
                  ? "negada"
                  : "reprogramada",
            }
          : cita
      )
    );
    setCitaSeleccionada(null);
    setShowTable(false); // Cierra la tabla después de la acción
  };

  const handleExpedienteClick = (cita) => {
    setCitaSeleccionada(cita); // Establece la cita seleccionada
    setShowTable(true); // Muestra la tabla de detalles
  };

  const closeTable = () => {
    setShowTable(false); // Ocultar la tabla
  };

  return (
    <div>
      {mostrarApro && (<CitasAprobadas />)}

      <div className="title-admin">Panel de administración</div>
      <div style={{ display: "flex" }}>
        <div className="box-gestion-cita">
          <div style={{ padding: "20px", fontSize: "22px", fontWeight: "600" }}>
            Gestión de citas
          </div>

          <div
            className="btns-header"
            style={{
              marginLeft: "26px",
              backgroundColor: "#EBEBEB",
              width: "640px",
              height: "45px",
              borderRadius: "10px",
            }}
          >
            <div style={{ padding: "4px", display: "flex", gap: "70px" }}>
              <div style={{ backgroundColor: "#EBEBEB" }}>
                <button className="btn-pendientesAd">Pendientes</button>
              </div>
              <div>
                <button className="btn-aprobadosAd" onClick={mostrarAprobadas}>
                  Aprobados
                </button>
              </div>
              <div>
                <button className="btn-negadosAd">Negados</button>
              </div>
              <div>
                <button className="btn-reprogramadasAd">Reprogramadas</button>
              </div>
            </div>
          </div>

          <div className="table-pendientes">
            <table>
              <thead>
                <tr>
                  <th style={{ color: "#757575", width: "200px" }}>Paciente</th>
                  <th style={{ color: "#757575", width: "200px" }}>Fecha</th>
                  <th style={{ color: "#757575", width: "200px" }}>Hora</th>
                  <th style={{ color: "#757575", width: "200px" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {citas
                  .filter((cita) => cita.estado === "pendiente") // Filtra solo las citas pendientes
                  .map((cita) => (
                    <tr key={cita.id}>
                      <th style={{ color: "black", fontWeight: "400" }}>
                        {cita.paciente}
                      </th>
                      <th style={{ color: "black", fontWeight: "400" }}>
                        {cita.fecha}
                      </th>
                      <th style={{ color: "black", fontWeight: "400" }}>
                        {cita.hora}
                      </th>
                      <td>
                        <button
                          className="btn-Acciones"
                          onClick={() => handleExpedienteClick(cita)}
                        >
                          Ver detalles
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="box-calendario">
          <div style={{ padding: "20px", fontSize: "22px", fontWeight: "600" }}>
            Calendario de disponibilidad
          </div>

          <div
            style={{ fontSize: "13px", marginLeft: "20px", fontWeight: "700" }}
          >
            Seleccionar fecha
          </div>
          <input
            type="date"
            className="input-Calendario"
            style={{ width: "200px", marginLeft: "17px" }}
          />

          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#D1FAE5",
                width: "130px",
                borderRadius: "5px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{ padding: "10px", color: "#065F46", fontSize: "14px" }}
              >
                8:00 - Disponible
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#FEE2E2",
                width: "130px",
                marginLeft: "20px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{ padding: "10px", color: "#991B1B", fontSize: "14px" }}
              >
                9:00 - Ocupado
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTable && (
        <DetallesCita
          cita={citaSeleccionada}
          closeTable={closeTable}
          handleAccion={handleAccion} // Pasa la función aquí
        />
      )}
    </div>
  );
};

export default PanelAdmin;
