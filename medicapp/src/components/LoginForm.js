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
    <div className="login-page" >
      <div className="ContainerLogin">
        <div className="login-container">
          <div className="header-container-login">
            <Logo />
          </div>
          <form className="form-container-login" onSubmit={handleSubmit}>
            <div className="input-field-login">
              <EmailInput />
            </div>
            <div className="input-field2-login">
              <PaswordInput />
            </div>
            <SubmitButton />
          </form>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#545454', width: '330px', marginTop: '29px', marginLeft: '66px' , display: 'flex', justifyContent: 'center' }} />
          <div className="contraseña-olvidada-login">
            ¿Has olvidado tu contraseña?
          </div>
        </div>
      </div>
    
      <div className="footer-links-login">
        <a href="/faq">Preguntas frecuentes</a> 
        <a href="/terms">Términos de uso</a> 
        <a href="/help-center">Centro de ayuda</a> 
        <a href="/privacy">Privacidad</a>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
