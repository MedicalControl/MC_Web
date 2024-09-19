import React from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import SideBar from './components/search/SideBar';
import Dashboard from './components/search/Dashboard';
import Header from './components/search/Header';
import Table from './components/search/Table';

import './App.css';
import LabTable from './components/laboratory/LabTable';

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
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Table />} />
          <Route path="/laboratorio" element={<LabTable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
