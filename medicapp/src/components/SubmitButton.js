import React from "react";
import './SubmitButton.css';

const SubmitButton = () => {
    return (
        <>
            <div className="Container-submit">
                <button type="submit" className="Submit-login">Entrar</button>
            </div>
            <div className="Container-submit">
                <button type="submit" className="Submit-login btn-login">Entrar / Iniciar sesión</button>
            </div>
        </>
    );
}

export default SubmitButton;