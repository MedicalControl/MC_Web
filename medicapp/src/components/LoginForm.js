import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PaswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import "./LoginForm.css";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Por favor, complete el campo de correo electrónico.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Por favor, complete el campo de contraseña.");
      isValid = false;
    }

    if (isValid) {
      navigate("/"); 
    }
  };

  return (
    <>  
      <div className="login-page">
        <div className="ContainerLogin">
          <div className="login-container">
            <div className="header-container-login">
              <Logo />
            </div>
            <form className="form-container-login" onSubmit={handleSubmit}>
              <div className="input-field-login">
                <EmailInput 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                />
              </div>
              <div className="input-field2-login">
                <PaswordInput 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                />
              </div>
              <SubmitButton />
            </form>
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#545454', width: '330px', marginTop: '29px', marginLeft: '66px', display: 'flex', justifyContent: 'center' }} />
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
