import React from "react";
import './Inputs.css';

const PaswordInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="input-form"
              value={value}
              onChange={onChange}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    )
};

export default PaswordInput;
