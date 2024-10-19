import { Route } from "react-router-dom";
import "./Cita.css";

const Cita = () => {
  return (
    <div className="container-cita">
      <h1 className="title-cita">Cita médica</h1>
      <div className="grid-cita">
        <div>
          <label>Nombre del establecimiento de salud:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>No. Expediente:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" className="input" />
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" className="input" />
        </div>
        <div>
          <label>Servicio y sala:</label>
          <input type="text" className="input" />
        </div>
      </div>
      <h2>I. Datos personales</h2>
      <div className="form-group">
        <label>Nombres y apellidos completos:</label>
        <input type="text" className="input" />
      </div>
      <div className="grid-cita">
        <div>
          <label>Fecha de nacimiento:</label>
          <input type="date" className="input" />
        </div>
        <div>
          <label>Edad:</label>
          <input type="number" className="input" />
        </div>
        <div>
          <label>Sexo:</label>
          <div className="gender-input">
            <input type="checkbox" id="male" />
            <label htmlFor="male">M</label>
            <input type="checkbox" id="female" />
            <label htmlFor="female">F</label>
          </div>
        </div>
      </div>
      <div className="grid-cita">
        <div>
          <label>Estado civil:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Ocupación u oficio:</label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="grid-cita">
        <div>
          <label>Religión:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Escolaridad:</label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="grid-cita">
        <div>
          <label>Nombre del padre:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Nombre de la madre:</label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="grid-cita">
        <div>
          <label>Confidencialidad:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Fuente de información:</label>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="grid-cita">
        <div>
          <label>Dirección de domicilio:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>Teléfono de contacto:</label>
          <input type="text" className="input" />
        </div>
        <div>
          <label>No. Cédula:</label>
          <input type="text" className="input" />
        </div>
      </div>

      <h2>II. Motivo de consulta:</h2>
      <textarea className="textarea"></textarea>

      <h2>III. Historia de la Enfermedad Actual:</h2>
      <textarea className="textarea"></textarea>

      <div className="next">
        <svg
          className="icon-next"
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

    </div>
  );
};

export default Cita;
