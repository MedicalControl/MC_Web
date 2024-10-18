import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Content.css'; // Agrega estilos aquí
import Table from "../search/Table";
import Agenda from "../calendar/Agenda";
import LabTable from "../laboratory/LabTable";
import Pacientes from "../pacientes/Pacientes";

const Content = () => {
  const location = useLocation();
  const [key, setKey] = useState(location.key);

  useEffect(() => {
    setKey(location.key); // Cambia la clave para forzar la animación al cambiar la ruta
  }, [location]);

  return (
    <div className="content-container" key={key}>
      {/* Renderiza el contenido según la ruta actual */}
      {location.pathname === "/" && <Table />}
      {location.pathname === "/agenda" && <Agenda />}
      {location.pathname === "/laboratorio" && <LabTable />}
      {location.pathname === "/pacientes" && <Pacientes />}
      {/* Agrega más rutas aquí */}
    </div>
  );
};

export default Content;
