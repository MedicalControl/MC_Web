import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const SideBar = ({sidebarState, onHomeClick}) => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setActiveSection("home");
    } else if (path === "/agenda") {
      setActiveSection("agenda");
    } else if (path === "/laboratorio") {
      setActiveSection("laboratorio");
    } else if (path === "/pacientes") {
      setActiveSection("pacientes");
    }
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="main-sidebar">
      <aside className="sidebar">
        <div className="menu-title">
          <img src="/medicallogo2.png" alt="logo" className="menu-logo" />
        </div>

        <span className="menu-title">MENU</span>

        {/* Home */}
        <Link to={"/"} onClick={() => {handleSectionClick("home"); onHomeClick()}}>
          <button className={`menu-btn ${activeSection === "home" ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </button>
        </Link>

        {sidebarState === "default" && (
          <>
            {/* Calendario */}
            <Link to={"/agenda"} onClick={() => handleSectionClick("agenda")}>
              <button className={`menu-btn ${activeSection === "agenda" ? "active" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <rect
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    x="48"
                    y="80"
                    width="416"
                    height="384"
                    rx="48"
                  />
                  <circle cx="296" cy="232" r="24" />
                  <circle cx="376" cy="232" r="24" />
                  <circle cx="296" cy="312" r="24" />
                  <circle cx="376" cy="312" r="24" />
                  <circle cx="136" cy="312" r="24" />
                  <circle cx="216" cy="312" r="24" />
                  <circle cx="136" cy="392" r="24" />
                  <circle cx="216" cy="392" r="24" />
                  <circle cx="296" cy="392" r="24" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    stroke-linecap="round"
                    d="M128 48v32M384 48v32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M464 160H48"
                  />
                </svg>
              </button>
            </Link>
            {/* Laboratorio */}
            <Link to={"/laboratorio"} onClick={() => handleSectionClick("laboratorio")}>
              <button className={`menu-btn ${activeSection === "laboratorio" ? "active" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M176 48h160M118 304h276M208 48v93.48a64.09 64.09 0 01-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 01-9.87-34.18V48"
                  />
                </svg>
              </button>
            </Link>
            
            {/* Pacientes pendientes */}
            <Link to={"/pacientes"} onClick={() => handleSectionClick("pacientes")}>
              <button className={`menu-btn ${activeSection === "pacientes" ? "active" : ""}`}>
                <svg
                  viewBox="0 0 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="🔍-Product-Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="ic_fluent_people_team_28_filled"
                        fill="#2AB9B7"
                        fill-rule="nonzero"
                      >
                        {" "}
                        <path
                          d="M17.7540247,11 C18.720523,11 19.5040247,11.7835017 19.5040247,12.75 L19.5040247,19.4989513 C19.5040247,22.5370966 17.0411213,25 14.002976,25 C10.9648308,25 8.50192738,22.5370966 8.50192738,19.4989513 L8.50192738,12.75 C8.50192738,11.7835017 9.28542907,11 10.2519274,11 L17.7540247,11 Z M3.75,11 L8.13210827,10.9980646 C7.78221386,11.420954 7.55643325,11.9502867 7.51057947,12.5302496 L7.50192738,12.75 L7.50192738,19.4989513 C7.50192738,20.6323434 7.79196393,21.6979939 8.30186513,22.6257307 C7.75085328,22.8662539 7.14166566,23 6.50123996,23 C4.01527377,23 2,20.9847262 2,18.49876 L2,12.75 C2,11.7835017 2.78350169,11 3.75,11 Z M19.8738438,10.9980646 L24.25,11 C25.2164983,11 26,11.7835017 26,12.75 L26,18.5 C26,20.9852814 23.9852814,23 21.5,23 C20.8609276,23 20.2529701,22.8667819 19.7023824,22.6266008 L19.7581025,22.5253735 C20.1867892,21.7118524 20.4480368,20.7963864 20.4959995,19.8248213 L20.5040247,19.4989513 L20.5040247,12.75 C20.5040247,12.084283 20.267475,11.4738152 19.8738438,10.9980646 Z M14,3 C15.9329966,3 17.5,4.56700338 17.5,6.5 C17.5,8.43299662 15.9329966,10 14,10 C12.0670034,10 10.5,8.43299662 10.5,6.5 C10.5,4.56700338 12.0670034,3 14,3 Z M22.0029842,4 C23.6598384,4 25.0029842,5.34314575 25.0029842,7 C25.0029842,8.65685425 23.6598384,10 22.0029842,10 C20.3461299,10 19.0029842,8.65685425 19.0029842,7 C19.0029842,5.34314575 20.3461299,4 22.0029842,4 Z M5.99701582,4 C7.65387007,4 8.99701582,5.34314575 8.99701582,7 C8.99701582,8.65685425 7.65387007,10 5.99701582,10 C4.34016157,10 2.99701582,8.65685425 2.99701582,7 C2.99701582,5.34314575 4.34016157,4 5.99701582,4 Z"
                          id="🎨-Color"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </Link>
          
          </>
        )}

        {sidebarState === 'expediente' && (
          <>

            {/* Chat */}
            <Link to={"/identificacion"} onClick={() => {handleSectionClick("identificacion");}}>
            <button className={`menu-btn ${activeSection === "identificacion" ? "active" : ""}`}>
              <AssignmentIndIcon 
                className={activeSection === "identificacion" ? "active-icon" : ""}
              />
            </button>
            </Link>
          </>
        )}




        <hr className="separator" />

        {/* Configuraciones */}
        <button class="menu-btn menu-footer" onClick={onHomeClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </button>
      </aside>
      {/* <Table/> */}
    </div>
  );
};

export default SideBar;
