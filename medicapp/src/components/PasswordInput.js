import React from "react";
import './Inputs.css';

const PaswordInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input type="password" placeholder="Contraseña" className="input-form"/>
        </div>
    )
};

export default PaswordInput;
