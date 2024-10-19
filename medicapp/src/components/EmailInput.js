import React from "react";
import './Inputs.css';

const EmailInput = ({ value, onChange, error }) => {
    return (
        <div>
            <input type="email" placeholder="Correo electrónico" className="input-form"/>
        </div>
    );
};

export default EmailInput;
