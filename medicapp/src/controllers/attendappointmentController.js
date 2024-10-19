import axios from "axios";

import Swal from "sweetalert2";

export const createAppointment = async (
  fk_agendacita,
  motivo,
  sintomas,
  diagnostico,
  indicaciones,
  tratamientos,
  navigate
) => {
  const url = "api/app/attendappointment";

  try {
    const response = await axios.post(url, {
        headers: {
            'authorization': localStorage.getItem('token')
        }, params: {
            fk_agendacita: fk_agendacita,
            motivo: motivo,
            sintomas: sintomas,
            diagnostico: diagnostico,
            indicaciones: indicaciones,
            recetas: {
              tratamientos: tratamientos,
            },
        }
    });


    console.log(`Cita creada: ${JSON.stringify(response.data)}`);
    // si todo esuvo ok
    // Alert de éxito
    Swal.fire({
      title: "Cita creada",
      text: "La cita fue creada correctamente",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  } catch (error) {
    // Manejo de errores
    if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Datos incorrectos",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      } else if (error.response && error.response.status === 500) {
        Swal.fire({
          title: "Error de servidor",
          text: "Hubo un problema al crear la cita",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error desconocido",
          text: "No se pudo crear la cita",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      console.error(`El error fue: ${error}`);
    }
  }
