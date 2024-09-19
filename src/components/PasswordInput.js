import React from "react";
import './Inputs.css';

const PaswordInput = () => {
    return (
        <div>
            <label htmlFor="password" className="label-form">Contraseña</label>
            <a href="#" className="link-form">¿Has olvidado tu contraseña?</a>
            <input type="password" placeholder="Ingresar tu contraseña" className="input-form"/>
        </div>
    )
};

export default PaswordInput