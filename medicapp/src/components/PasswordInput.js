import React from "react";
import './Inputs.css';

const PaswordInput = ({ value, onChange, error }) => {
    return (
        <div>
<<<<<<< HEAD
            <input type="password" placeholder="Contraseña" className="input-form"/>
=======
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="input-form"
              value={value}
              onChange={onChange}
            />
            {error && <span className="error-message">{error}</span>}
>>>>>>> CriCri
        </div>
    )
};

export default PaswordInput;
