import React from "react";
import "./Header.css";

const Header = () => {
    // obteniendo el correo del usuario por el local storage
    const email = localStorage.getItem("email");
    return (
        <header className="header">
            <div className="profile-info">
                <p className="name">{email}</p>
                <p className="role">Médico General</p>
            </div>
            <img src="/doctor.png" alt="profile" className="profile-picture"></img>
        </header>
    );
};
export default Header