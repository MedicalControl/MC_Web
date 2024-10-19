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
      fk_agendacita,
      motivo,
      sintomas,
      diagnostico,
      indicaciones,
      recetas: {
        tratamientos
      }
    }, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    });

    console.log(`Cita creada: ${JSON.stringify(response.data)}`);

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
    console.error(`Error al crear la cita: ${error}`);

    let errorMessage = "No se pudo crear la cita";
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage = "Datos incorrectos: " + error.response.data.message;
      } else if (error.response.status === 500) {
        errorMessage = "Error de servidor";
      }
    }

    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
