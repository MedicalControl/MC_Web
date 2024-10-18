import React, { useState } from "react";
import "./HIdentificacion.css";

const HIdentificacion = () => {
  const [currentContent, setCurrentContent] = useState("identificacion"); // Puedes usar 'identificacion' y 'otroContenido'

  const handleNextClick = () => {
    setCurrentContent("otroContenido");
  };

  const handleBackClick = () => {
    setCurrentContent("identificacion");
  };

  return (
    <div className="container-identificacion">
      {/* Este es el header de la identificacion */}
      <div className="header-identificacion">
        <div className="header-left">
          {/*  <img src="/elWebo.jpg" alt="Perfil" className="perfil-foto"/> */}
          <img src="medicallogo2.png" alt="logo" className="logo" />
          <h1 className="title-identificacion">
            Hoja de identificación clinica
          </h1>
        </div>
        {/* Aqui pondria la imagen del logo de medicina */}
      </div>

      {/* Aqui el contenido cambia */}
      {currentContent === "identificacion" && (
        <>
          <div className="expediente-header">
            <div className="fecha-expediente">
              <span id="fechaActual">sábado, 19 de septiembre de 2024 </span>
            </div>

            <div className="expediente">
              <span>Expediente: 29294ASD</span>
            </div>
          </div>

          <form className="form-identificacion">
            <div className="form-row full-row">
              <div className="profile-identificacion">
                <img src="elWebo.jpg" alt="Profile" className="img-profile" />
              </div>

              <div className="input-container">
                <div className="form-row-group">
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres y apellidos"
                    className="input-identificacion"
                  />
                  <input
                    type="text"
                    name="cedula"
                    placeholder="No. de cédula"
                    className="input-identificacion"
                  />
                  <input
                    type="text"
                    name="edad"
                    placeholder="Edad"
                    className="input-identificacion"
                  />

                  <div className="radio-group">
                    <span>Sexo:</span>
                    <label>
                      <input type="radio" name="sexo" value="M" /> M
                    </label>
                    <label>
                      <input type="radio" name="sexo" value="F" /> F
                    </label>
                  </div>
                </div>

                <div className="form-row-group">
                  <input
                    type="text"
                    name="estadoCivil"
                    placeholder="Estado Civil"
                    className="input-identificacion"
                  />
                  <input
                    type="text"
                    name="ocupacion"
                    placeholder="Ocupación u oficio"
                    className="input-identificacion"
                  />
                </div>

                <div className="form-row-group">
                  <input
                    type="text"
                    name="escolaridad"
                    placeholder="Escolaridad"
                    className="input-identificacion"
                  />
                  <input
                    type="text"
                    name="religion"
                    placeholder="Religión"
                    className="input-identificacion"
                  />
                </div>
              </div>
            </div>

            <input
              type="text"
              name="direccion"
              placeholder="Dirección de residencia"
              className="input-identificacion full-row"
            />
            <div className="contact-row">
              <input
                type="text"
                name="departamento"
                placeholder="Departamento"
                className="input-identificacion"
              />
              <input
                type="text"
                name="municipio"
                placeholder="Municipio"
                className="input-identificacion"
              />
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                className="input-identificacion"
              />
              <input
                type="text"
                name="celular"
                placeholder="Celular"
                className="input-identificacion"
              />
            </div>

            <div className="parents-row">
              <input
                type="text"
                name="nombreMadre"
                placeholder="Nombre de la madre"
                className="input-identificacion"
              />

              <input
                type="text"
                name="nombrePadre"
                placeholder="Nombre del padre"
                className="input-identificacion"
              />
            </div>

            <div className="section full-row">
              <h3>Enfermedades Infecto - Contagiosas:</h3>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Hepatitis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Sífilis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  TB
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Amebiasis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Tosferina
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Sarampion
                </label>

                <label className="checkbox-label">
                  <input type="checkbox" />
                  Meningitis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Rubéola
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Parotiditis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Impétigo
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Fiebre tifoidea
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Escarlatina
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Malaria
                </label>

                <label className="checkbox-label">
                  <input type="checkbox" />
                  Escabiosis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Pediculosis
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Tiña
                </label>

                <label className="checkbox-label">
                  <input type="checkbox" />
                  Otros
                </label>
                <textarea
                  className="textarea-otros"
                  placeholder="Especifique otros..."
                ></textarea>
              </div>
            </div>

            <div className="section full-row">
              <h3>Enfermedades hereditarias:</h3>
              <div className="checkbox-group-hereditarias">
                <label>
                  <input type="checkbox" />
                  Alergias
                </label>
                <label>
                  <input type="checkbox" />
                  Diabetes mellitus
                </label>
                <label>
                  <input type="checkbox" />
                  Hipertensión arterial
                </label>
                <label>
                  <input type="checkbox" />
                  Enfermedad reumática
                </label>

                <label>
                  <input type="checkbox" />
                  Enfermedades renales
                </label>
                <label>
                  <input type="checkbox" />
                  Enfermedades oculares
                </label>
                <label>
                  <input type="checkbox" />
                  Enfermedades cardiacas
                </label>

                <label>
                  <input type="checkbox" />
                  Enfermedad hepática
                </label>
                <label>
                  <input type="checkbox" />
                  Enfermedades musculares
                </label>
                <label>
                  <input type="checkbox" />
                  Malformaciones congénitas
                </label>

                <label>
                  <input type="checkbox" />
                  Desórdenes mentales
                </label>
                <label>
                  <input type="checkbox" />
                  Enfermedades degenerativas del sistema nervioso central
                </label>

                <label>
                  <input type="checkbox" />
                  Anomalías del crecimiento y desarrollo
                </label>
                <label>
                  <input type="checkbox" />
                  Errores innatos del metabolismo
                </label>
                <label>
                  <input type="checkbox" />
                  Otros
                </label>

                <textarea
                  className="textarea-otros"
                  placeholder="Especifique otros..."
                ></textarea>
              </div>
            </div>
          </form>

          {/* Al darle click al svg lo manda a otro contenido */}
          <div className="next-identificacion">
            <svg
              onClick={handleNextClick}
              className="icon-next-identificacion"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                  fill="#000000"
                />{" "}
              </g>
            </svg>
          </div>
        </>
      )}

      {/* Este es otro contenido */}
      {currentContent === "otroContenido" && (
        <>
          <form className="form-antecedentes">
            <h3>Antecedentes personales no patológicos</h3>

            <div className="immunizations">
              <label>
                Inmunizaciones completas (confirmar con tarjeta de vacuna si es
                posible):
              </label>

              <div className="immunization-checkbox">
                <input
                  type="checkbox"
                  id="immunization-yes"
                  name="immunization"
                  value="yes"
                />
                <label for="immunization-yes">Sí</label>
                <input
                  type="checkbox"
                  id="immunization-no"
                  name="immunization"
                  value="no"
                />
                <label for="immunization-no">No</label>

                <input
                  className="input-identificacion"
                />
              </div>
            </div>

            <div className="habits">
                  <label>Habitos</label>
                  <div className="sleep-hours">
                    <label>Horas de sueño</label>
                    <input type="text" name="sleep-hours" className="input-identificacion"/>
                  </div>

                  <div className="work-hours">
                    <label>Horas laborales</label>
                    <input type="text" name="work-hours" className="input-identificacion"/>
                  </div>

                  <div className="activity">
                    <label>Tipo y hora de actividad fisica</label>
                    <input type="text" name="activity" className="input-identificacion"/>
                  </div>

                  <div className="nutrition">
                    <label>Alimentación</label>
                    <input type="text" name="nutrition" className="input-identificacion"/>
                  </div>

            </div>

            <div className="sustancias-uso">

                  <div className="tabaco">
                    <label>Tabaco: </label>
                    <input type="checkbox" id="tabaco-yes" name="tabaco" value="yes"/>
                    <label for="tabaco-yes">Sí</label>

                    <input type="checkbox" id="tabaco-no" name="tabaco" value="no"/>
                    <label for="tabaco-no">No</label>

                    <div className="tabaco-info">
                      <label>Tipo: </label>
                      <input type="text" name="tabaco-type" className="input-identificacion"/>
                      <label>Cantidad y frecuencia: </label>
                      <input type="text" name="tabaco-quantity" className="input-identificacion"/>
                    </div>

                    <div className="tabaco-age-info">
                      <label>Edad de inicio: </label>
                      <input type="text" name="tabaco-age" className="input-identificacion"/>

                      <label>Edad de abandono (si aplica): </label>
                      <input type="text" name="tabaco-age-end" className="input-identificacion"/>

                    </div>

                    <div className="tabaco-duration-info">
                      <label>Duración del habito (en años):</label>
                      <input type="text" name="tabaco-duration" className="input-identificacion"/>
                    </div>
                  </div>

                  <div className="alcohol">
                    <label>Alcohol: </label>
                    <input type="checkbox" id="alcohol-yes" name="alcohol" value="yes"/>
                    <label htmlFor="alcohol-yes">Sí</label>

                    <input type="checkbox" id="alcohol-no" name="alcohol" value="no"/>
                    <label htmlFor="alcohol-no">No</label>

                    <div className="alcohol-info">
                      <label>Tipo: </label>
                      <input type="text" name="alcohol-type" className="input-identificacion"/>
                      <label>Cantidad y frecuencia: </label>
                      <input type="text" name="alcohol-quantity" className="input-identificacion"/>
                    </div>

                    <div className="alcohol-age-info">
                      <label>Edad de inicio: </label>
                      <input type="text" name="alcohol-age" className="input-identificacion"/>

                      <label>Edad de abandono (si aplica): </label>
                      <input type="text" name="alcohol-age-end" className="input-identificacion"/>
                    </div>

                    <div className="alcohol-duration-info">
                      <label>Duración del hábito (en años):</label>
                      <input type="text" name="alcohol-duration" className="input-identificacion"/>
                    </div>
                  </div>

                  <div className="drogas">
                    <label>Drogas ilegales: </label>
                    <input type="checkbox" id="drogas-yes" name="drogas" value="yes"/>
                    <label htmlFor="drogas-yes">Sí</label>

                    <input type="checkbox" id="drogas-no" name="drogas" value="no"/>
                    <label htmlFor="drogas-no">No</label>

                    <div className="drogas-info">
                      <label>Tipo: </label>
                      <input type="text" name="drogas-type" className="input-identificacion"/>
                      <label>Cantidad y frecuencia: </label>
                      <input type="text" name="drogas-quantity" className="input-identificacion"/>
                    </div>

                    <div className="drogas-age-info">
                      <label>Edad de inicio: </label>
                      <input type="text" name="drogas-age" className="input-identificacion"/>

                      <label>Edad de abandono (si aplica): </label>
                      <input type="text" name="drogas-age-end" className="input-identificacion"/>
                    </div>

                    <div className="drogas-duration-info">
                      <label>Duración del hábito (en años):</label>
                      <input type="text" name="drogas-duration" className="input-identificacion"/>
                    </div>
                  </div>



            </div>
          </form>

          {/* Al darle click al svg lo manda al anterior contenido */}
          <div className="before-identificacion">
            <svg
              className="icon-left-identificacion"
              onClick={handleBackClick}
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                  fill="#000000"
                />{" "}
              </g>
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default HIdentificacion;
