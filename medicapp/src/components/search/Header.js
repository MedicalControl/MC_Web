import React, { useEffect, useState } from "react";
import "./Header.css";
import { fetchMe } from "../../controllers/meController";

const Header = () => {
    // obteniendo el correo del usuario por el local storage
    const email = localStorage.getItem("email");

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchMe(setUser);
    }, []);
    
    return (
        <header className="header">
            <div className="profile-info">
                <p className="name">{user?.nombres}</p>
                <p className="role">Médico General</p>
            </div>
            <img src="/doctor.png" alt="profile" className="profile-picture"></img>
        </header>
    );
};
export default Header