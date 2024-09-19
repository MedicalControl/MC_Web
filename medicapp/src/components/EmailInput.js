import React from "react";
import './Inputs.css';
const EmailInput = () => {
    return (
        <div>
            <label htmlFor="email" className="label-form">Email</label>
            <input type="email" placeholder="Ingresa tu email" className="input-form"/>
        </div>
    );
};

export default EmailInput;