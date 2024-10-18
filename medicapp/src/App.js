import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dashboard from './components/search/Dashboard';
import Header from './components/search/Header';
import Table from './components/search/Table';
import Agenda from './components/calendar/Agenda';
import Agenda2 from './components/calendar/Agenda2';
import Cita from './components/record/Cita';
import HIdentificacion from './components/record/HIdentificacion';
import Test from './components/record/Test';
import Pacientes from './components/pacientes/Pacientes';
import Expediente from './components/record/Expediente';
import SideBar from './components/search/SideBar';


import './App.css';
import LabTable from './components/laboratory/LabTable';
import Enfermeria_form from './components/Enfermeria/Enfermeria_form';

// con este componente muestra el SideBar y Header mientras no este en la ruta /login
function Layout({children}) {
  const location = useLocation();

  const showLayout = location.pathname !== '/login';

  return (
    <div className="app-container">
      {showLayout && <Header />}
      <div className="main-content">
        {showLayout && <SideBar />}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      document.title = 'Login';
    } else if (location.pathname === '/') {
      document.title = 'Inicio';
    } else if (location.pathname === '/laboratorio') {
      document.title = 'Laboratorio';
    } else if (location.pathname === '/agenda') {
      document.title = 'Agenda';
    } else if (location.pathname === '/cita') {
      document.title = 'Cita';
    } else if (location.pathname === '/enfermeria') {
      document.title = 'Enfermeria';
    } else if (location.pathname === '/identificacion') {
      document.title = 'Identificación';
    } else if (location.pathname === '/test') {
      document.title = 'Test';
    } else if (location.pathname === '/pacientes') {
      document.title = 'Pacientes Pendientes';
    } else if (location.pathname === '/expediente') {
      document.title = 'Expediente';
    }
  }, [location]);
  return (
      <Layout> 
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/enfermeria" element={<Enfermeria_form />} />
          <Route path="/" element={<Table />} />
          <Route path="/laboratorio" element={<LabTable />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda2" element={<Agenda2 />} /> 
          <Route path="/cita" element={<Cita />} />
          <Route path='/identificacion' element={<HIdentificacion />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/pacientes' element={<Pacientes />}/>
          <Route path='/expediente' element={<Expediente />}/>

        </Routes>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="scale-fade" // Cambia el nombre de la clase para el nuevo efecto
            timeout={300}
          >

          <Routes location={location}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Table />} />
            <Route path="/laboratorio" element={<LabTable />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/agenda2" element={<Agenda2 />} /> 
            <Route path="/cita" element={<Cita />} />
            <Route path='/identificacion' element={<HIdentificacion />}/>
            <Route path='/test' element={<Test />}/>
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/expediente' element={<Expediente />}/>

          </Routes>
            
          </CSSTransition>
        </TransitionGroup>

      </Layout>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

//export default App;
export default AppWrapper;