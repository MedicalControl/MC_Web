import React, { useState } from "react";
import "./Enfermeria_form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const Enfermeria_form = () => {
  const [formData, setFormData] = useState({
    establecimiento: "",
    expediente: "",
    usuario: "",
    cedula: "",
    servicio: "",
    cama: "",
    inss: "",
    fecha: "",
    hora: "",
    observacion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos, por ejemplo, haciendo un POST a tu API
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="header-top" >
      <div className="header-form-enfermeria">
        <div>
          <h2>REGISTRAR NUEVO PACIENTE</h2>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h4>NOTAS DE ENFERMERÍA</h4>
        </div>
      </div>
      </div>
      <div className="content" >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div className="form-group1">
              <div>
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  Nombre del establecimiento de salud
                </label>
                <div>
                  <input
                    type="text"
                    name="establecimiento"
                    value={formData.establecimiento}
                    onChange={handleChange}
                    required
                    className="input_nombre_establecimiento"
                  />
                </div>
              </div>
            </div>
            <div className="form-group2">
              <div>
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  No. Expediente
                </label>
                <div>
                  <input
                    type="text"
                    name="expediente"
                    value={formData.expediente}
                    onChange={handleChange}
                    required
                    className="input_expediente"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group3">
            <div>
              <label style={{ fontSize: "15px", fontWeight: "600" }}>
                Nombre y apellido del usuario
              </label>
              <div>
                <input
                  type="text"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  required
                  className="input_nombre"
                />
              </div>
            </div>
            <div className="form-group4">
              <div>
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  No. Cédula
                </label>
                <div>
                  <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    required
                    className="input_cedula"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group5">
            <div>
              <label style={{ fontSize: "15px", fontWeight: "600" }}>
                Servicio y sala
              </label>
              <div>
                <input
                  type="text"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="input_servicio"
                />
              </div>
            </div>

            <div className="form-group6">
              <div>
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  No. Cama
                </label>
                <div>
                  <input
                    type="text"
                    name="cama"
                    value={formData.cama}
                    onChange={handleChange}
                    className="input_cama"
                  />
                </div>
              </div>
            </div>

            <div className="form-group7">
              <div>
                <label style={{ fontSize: "15px", fontWeight: "600" }}>
                  No. INSS
                </label>
                <div>
                  <input
                    type="text"
                    name="inss"
                    value={formData.inss}
                    onChange={handleChange}
                    className="input_inss"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="observaciones_title">
            Observaciones y Cuidados de Enfermería
          </div>
          <div className="">
            <label
              style={{
                fontSize: "13px",
                fontWeight: "600",
                display: "flex",
                marginTop: "10px",
              }}
            >
              Observación
            </label>
            <div style={{ display: "flex" }}>
              <textarea
                name="observacion"
                value={formData.observacion}
                onChange={handleChange}
                className="textArea_observacion"
              ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="btn_AddNota">
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={{ marginRight: "8px" }}
              />
              Agregar nota
            </button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Observaciones y Cuidados de Enfermería</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.fecha}</td>
              <td>{formData.hora}</td>
              <td>{formData.observacion}</td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="save-btn">
          <FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: "8px" }} />
          Guardar y enviar a lista de espera
        </button>
      </div>
    </div>
  );
};

export default Enfermeria_form;
