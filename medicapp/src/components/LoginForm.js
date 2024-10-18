import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PaswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import "./LoginForm.css";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const alertSuccess  = () => {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Sesión iniciada correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    })
  }

  const alertError  = (error, message) => {
    Swal.fire({
      title: error,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  const [captchaValue, setCaptchaValue] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    let isValid = true;
    setEmailError("");
    setPasswordError("");

    console.log(`Email y password: ${email} ${password}`);

    if (!email) {
      setEmailError("Por favor, complete el campo de correo electrónico.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Por favor, complete el campo de contraseña.");
      isValid = false;
    }

    // esta parte es en el caso de que todo fue exitoso
    const url = "/api/auth/login_medical";
    
    try {
      const response = await axios.post(url, {
        correo:email,
        contrasena:password
      })
      //console.log(response.data);

      // guardamos el token de la sesion
      const token = response.data.token;
      localStorage.setItem("token", token);

      // guardamos informacion del usuario
      const data = response.data;
      console.log(`El correo: ${data.correo}`);
      localStorage.setItem("user", JSON.stringify(data));
      
      // guardamos el correo del usuario
      localStorage.setItem("email", email);

      alertSuccess();
    } catch (error) {
      //console.error(`El error fue: ${error.response}`);
      // si la password es incorrecta
      if (error.response === 400) {
        alertError("Contraseña incorrecta", error.response.data.message);
      } else if (error.response === 404) { // usuario no encontrado
        alertError("Usuario no encontrado", error.response.data.message);
      } else {
        alertError("Error de servidor", error.response.data.message);
      }
      console.error(`El error fue: ${error}`);
    }
    

    //if (isValid) {
      //alertSuccess(); 
    //}
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

              {/* 
              -- esto lo tengo que validar con Node o algo de backend
              <ReCAPTCHA
                sitekey="6LfVVmUqAAAAALp65LnDqM_4dL7pu-eImqD-SkmE"
                onChange={handleCaptchaChange}
              />
              */}
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
