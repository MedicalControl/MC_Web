import React from "react";
import "./Test.css";

const Test = () => {
  return (
    <div class="profile-card">
      <img
        class="profile-picture-test"
        src="elWebo.jpg"
        alt="Profile Picture"
      />
      <div class="profile-details">
        <h2>Nombres y apellidos completos:</h2>
        <p class="profile-info-test">Yasser José Darce Mairena</p>

        <div class="grid-container-test">
          <div>
            <label>No. de cédula:</label>
            <p class="profile-info-test">001-090205-1003N</p>
          </div>
          <div>
            <label>Edad:</label>
            <p class="profile-info-test">20 años</p>
          </div>
          <div>
            <label>Sexo:</label>
            <div class="gender-selection">
              <span>M</span>
              <input type="checkbox" checked />
              <span>F</span>
              <input type="checkbox" />
            </div>
          </div>
          <div>
            <label>Estado civil:</label>
            <p class="profile-info-test">Soltero</p>
          </div>
          <div>
            <label>Ocupación u oficio:</label>
            <p class="profile-info-test">Estudiante</p>
          </div>
          <div>
            <label>Escolaridad:</label>
            <p class="profile-info-test">Bachiller</p>
          </div>
          <div>
            <label>Religión:</label>
            <p class="profile-info-test">Musulman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
