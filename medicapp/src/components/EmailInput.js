import React from "react";
import './Inputs.css';

const EmailInput = ({ value, onChange, error }) => {
    return (
        <div>
<<<<<<< HEAD
            <input type="email" placeholder="Correo electrónico" className="input-form"/>
=======
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="input-form"
              value={value}
              onChange={onChange}
            />
            {error && <span className="error-message">{error}</span>}
>>>>>>> CriCri
        </div>
    );
};

export default EmailInput;
