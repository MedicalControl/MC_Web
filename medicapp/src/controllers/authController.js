// controllers/authController.js
import axios from "axios";
import Swal from "sweetalert2";


export const loginUser = async (email, password, navigate) => {
  const url = `api/auth/login_medical`;
  try {
    const response = await axios.post(url, {
      correo: email,
      contrasena: password,
    });

    // Guardamos el token de la sesión
    const token = response.data.token;
    localStorage.setItem("token", token);

    // Guardamos información del usuario
    const data = response.data;
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("email", email);

    // Alert de éxito
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Sesión iniciada correctamente',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });
  } catch (error) {
    // Manejo de errores
    if (error.response && error.response.status === 400) {
      Swal.fire({
        title: "Contraseña incorrecta",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else if (error.response && error.response.status === 404) {
      Swal.fire({
        title: "Usuario no encontrado",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error de servidor",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    console.error(`El error fue: ${error}`);
  }
};
