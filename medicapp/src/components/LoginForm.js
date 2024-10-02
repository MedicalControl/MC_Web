import React from "react";
import EmailInput from "./EmailInput";
import PaswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import './LoginForm.css';
import Logo from "./Logo";

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="logo-container">
                <Logo />
            </div>
            <form className="form-container">
                <h1>Bienvenido</h1>
                <div className="input-field">
                    <EmailInput />
                </div>
                <div className="input-field">
                    <PaswordInput />
                </div>
                <SubmitButton />

            </form>
        </div>
    )
}

export default LoginForm