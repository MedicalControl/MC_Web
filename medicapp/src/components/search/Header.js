import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="profile-info">
                <p className="name">Cristopher Quintana</p>
                <p className="role">Médico General</p>
            </div>
            <img src="/doctor.png" alt="profile" className="profile-picture"></img>
        </header>
    );
};
export default Header