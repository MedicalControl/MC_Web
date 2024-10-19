// SegundaHoja.js
import React from "react";
import "./SegundaHoja.css";

export default function SegundaHoja() {
  return (
    <div className="segunda-hoja">
      <div style={{ fontWeight: "600" }}>
        Antecedentes Personales no Patológicos:
      </div>
      <div style={{}}>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <label style={{ width: "450px" }}>
            Inmunizaciones completas (confirmar con tarjeta de vacuna si es
            posible):
          </label>
          <div style={{ display: "flex" }}>
            <label>
              <input className="input-identify" type="checkbox" name="enfermedades" value="otros" />
              Si
            </label>
            <div style={{ marginLeft: "10px" }}>
              <label>
                <input className="input-identify" type="checkbox" name="enfermedades" value="otros" />
                No
              </label>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "150px" }}>Hábitos:Horas de sueño</label>
            <input
              className="input-identify"
              type="text"
              name="telefono"
              style={{ borderBottom: "1px solid #c5c5c5", width: "10px" }}
            />
            <label style={{ width: "100px" }}>Horas laborales</label>
            <input
              className="input-identify"
              type="text"
              name="telefono"
              style={{ borderBottom: "1px solid #c5c5c5" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "180px" }}>
              Tipo y hora de actvidad física:
            </label>
            <input
              className="input-identify"
              type="text"
              name="telefono"
              style={{ borderBottom: "1px solid #c5c5c5" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "80px" }}>Alimentación</label>
            <input
              className="input-identify"
              type="text"
              name="telefono"
              style={{ borderBottom: "1px solid #c5c5c5" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "50px" }}>Tabaco</label>
            <label>
              
              <input type="checkbox" name="enfermedades" value="otros" className="input-identify"/>
              Si
            </label>
            <div style={{ marginLeft: "10px" }}>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" className="input-identify"/>
                No
              </label>
            </div>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <label style={{ width: "30px" }}>Tipo</label>
              <input
                className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "60px" }}
              />
            </div>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <label style={{ width: "140px" }}>Cantidad y precuencia</label>
              <input
                className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: '190px' }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "90px" }}>Edad de inicio</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
                className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "60px" }}
              />
            </div>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <label style={{ width: "190px" }}>
                Edad de abandono(Sin aplica)
              </label>
              <input
                className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5" }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "180px" }}>
              Duración del hábito(en años):
            </label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
                className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "60px" }}
              />
            </div>
            <label style={{ width: "100px" }}>Drogas ilegales</label>
            <label>
              <input type="checkbox" name="enfermedades" value="otros" className="input-identify"/>
              Si
            </label>
            <div style={{ marginLeft: "10px" }}>
              <label>
                <input type="checkbox" name="enfermedades" value="otros" className="input-identify"/>
                No
              </label>
            </div>
            <label style={{ width: "30px", marginLeft: "5px" }}>Tipo</label>
            <input
              type="text"
              name="telefono"
              className="input-identify"
              style={{ borderBottom: "1px solid #c5c5c5", width: "60px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "140px" }}>Cantidad y precuencia</label>
            <input
              type="text"
              name="telefono"
              className="input-identify"
              style={{ borderBottom: "1px solid #c5c5c5", width: "10px" }}
            />
            <label style={{ width: "90px" }}>Edad de inicio</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "30px" }}
              />
            </div>
            <label style={{ width: "170px" }}>Edad de abandono(si aplica)</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "30px" }}
              />
            </div>
            
          </div>
          <div style={{ display: "flex" }}>
            <label style={{ width: "180px" }}>
              Duración del hábito(en años):
            </label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "60px" }}
              />
            </div>
            <label style={{ width: "66px" }}>Farmacos</label>
            <label>
              <input className="input-identify" type="checkbox" name="enfermedades" value="otros" />
              Si
            </label>
            <div style={{ marginLeft: "10px" }}>
              <label>
                <input className="input-identify" type="checkbox" name="enfermedades" value="otros" />
                No
              </label>
            </div>
            </div>
           <div style={{display: 'flex'}} >
            <label style={{ width: "368px" }}>Número de medicamentos que está recibiendo actualmente:</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "220px" }}
              />
            </div>
           </div>
           <div style={{display: 'flex'}} >
            <label style={{ width: "230px" }}>Nombre y posología de los fármacos:</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "340px" }}
              />
            </div>
           </div>
           <div style={{display: 'flex'}} >
            <label style={{ width: "90px" }}>Otros hábitos</label>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <input
              className="input-identify"
                type="text"
                name="telefono"
                style={{ borderBottom: "1px solid #c5c5c5", width: "480px" }}
              />
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
