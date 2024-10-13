import React from "react";
import EmailInput from "./EmailInput";
import PaswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import "./LoginForm.css";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    navigate("/"); 
  };
  return (
    <>
      <div className="Container">
        <div className="login-container">
          <div className="header-container">
            <Logo />
            <div className="text-container">
              <div className="Title">Medical Control</div>
              <h3 className="Subtitle">Gestiona tu salud, gestiona tu vida</h3>
            </div>
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-field">
              <EmailInput />
            </div>
            <div className="input-field2">
              <PaswordInput />
            </div>
            <SubmitButton />
          </form>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#545454', width: '348px', marginTop: '29px' }} />
          <div className="contraseña-olvidada">
            ¿Has olvidado tu contraseña?
          </div>
        </div>
      </div>
    
      <div className="footer-links">
        <a href="/faq">Preguntas frecuentes</a> 
        <a href="/terms">Términos de uso</a> 
        <a href="/help-center">Centro de ayuda</a> 
        <a href="/privacy">Privacidad</a>
      </div>
    </>
  );
};

export default LoginForm;
