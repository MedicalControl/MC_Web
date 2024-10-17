import React from "react";
import './HIdentificacion.css';

const HIdentificacion = () => {
    return (
        <div className="container-identificacion">
            <div className="header-identificacion">
                <div className="header-left">
                    {/*  <img src="/elWebo.jpg" alt="Perfil" className="perfil-foto"/> */}
                    <img src="medicallogo2.png" alt="logo" className="logo"/>
                    <h1 className="title-identificacion">Hoja de identificación clinica</h1>
                </div>
                {/* Aqui pondria la imagen del logo de medicina */}
            </div>
            
            <div className="expediente-header">
                <div className="fecha-expediente">
                    <span id="fechaActual">sábado, 19 de septiembre de 2024 </span>
                </div>

                <div className="expediente">
                    <span>Expediente: 29294ASD</span>
                </div>
            </div>


            <form className="form-identificacion">
                <div className="form-row full-row">
                    <div className="profile-identificacion">
                        <img src="elWebo.jpg" alt="Profile" className="img-profile"/>
                    </div>
                    <div className="input-container">
                        <div className="form-row-group">
                            <input type="text" name="nombres" placeholder="Nombres y apellidos" className="input-identificacion"/>
                            <input type="text" name="cedula" placeholder="No. de cédula" className="input-identificacion"/>
                            <input type="text" name="edad" placeholder="Edad" className="input-identificacion"/>
                            <div className="radio-group">
                                <span>Sexo:</span>
                                <label>
                                    <input type="radio" name="sexo" value="M"/> M
                                </label>
                                <label>
                                    <input type="radio" name="sexo" value="F"/> F
                                </label>
                            </div>
                        </div>

                        <div className="form-row-group">
                            <input type="text" name="estadoCivil" placeholder="Estado Civil" className="input-identificacion"/>
                            <input type="text" name="ocupacion" placeholder="Ocupación u oficio" className="input-identificacion"/>
                        </div>

                        <div className="form-row-group">
                            <input type="text" name="escolaridad" placeholder="Escolaridad" className="input-identificacion"/>
                            <input type="text" name="religion" placeholder="Religión" className="input-identificacion"/>
                        </div>
                    </div>
                </div>



                <input type="text" name="direccion" placeholder="Dirección de residencia" className="input-identificacion full-row"/>
                <div className="contact-row">
                    <input type="text" name="departamento" placeholder="Departamento" className="input-identificacion"/>
                    <input type="text" name="municipio" placeholder="Municipio" className="input-identificacion"/>
                    <input type="text" name="telefono" placeholder="Teléfono" className="input-identificacion"/>
                    <input type="text" name="celular" placeholder="Celular" className="input-identificacion"/>
                </div>
                
                <div className="parents-row">
                    <input type="text" name="nombreMadre" placeholder="Nombre de la madre" className="input-identificacion"/>
                
                    <input type="text" name="nombrePadre" placeholder="Nombre del padre" className="input-identificacion"/>
                </div>                

                <div className="section full-row">
                    <h3>Enfermedades Infecto - Contagiosas:</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-label"><input type="checkbox"/>Hepatitis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Sífilis</label>
                        <label className="checkbox-label"><input type="checkbox"/>TB</label>
                        <label className="checkbox-label"><input type="checkbox"/>Amebiasis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Tosferina</label>
                        <label className="checkbox-label"><input type="checkbox"/>Sarampion</label>

                        <label className="checkbox-label"><input type="checkbox"/>Meningitis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Rubéola</label>
                        <label className="checkbox-label"><input type="checkbox"/>Parotiditis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Impétigo</label>
                        <label className="checkbox-label"><input type="checkbox"/>Fiebre tifoidea</label>
                        <label className="checkbox-label"><input type="checkbox"/>Escarlatina</label>
                        <label className="checkbox-label"><input type="checkbox"/>Malaria</label>

                        <label className="checkbox-label"><input type="checkbox"/>Escabiosis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Pediculosis</label>
                        <label className="checkbox-label"><input type="checkbox"/>Tiña</label>


                         <label className="checkbox-label">
                            <input type="checkbox"/>Otros
                        </label>
                        <textarea className="textarea-otros" placeholder="Especifique otros..."></textarea>


                    </div>
                </div>

                <div className="section full-row">
                    <h3>Enfermedades hereditarias:</h3>
                    <div className="checkbox-group-hereditarias">
                        <label><input type="checkbox"/>Alergias</label>
                        <label><input type="checkbox"/>Diabetes mellitus</label>
                        <label><input type="checkbox"/>Hipertensión arterial</label>
                        <label><input type="checkbox"/>Enfermedad reumática</label>

                        <label><input type="checkbox"/>Enfermedades renales</label>
                        <label><input type="checkbox"/>Enfermedades oculares</label>
                        <label ><input type="checkbox"/>Enfermedades cardiacas</label>


                        <label><input type="checkbox"/>Enfermedad hepática</label>
                        <label><input type="checkbox"/>Enfermedades musculares</label>
                        <label><input type="checkbox"/>Malformaciones congénitas</label>

                        <label><input type="checkbox"/>Desórdenes mentales</label>
                        <label><input type="checkbox"/>Enfermedades degenerativas del sistema nervioso central</label>

                        <label><input type="checkbox"/>Anomalías del crecimiento y desarrollo</label>
                        <label><input type="checkbox"/>Errores innatos del metabolismo</label>
                        <label><input type="checkbox"/>Otros</label>

                        <textarea className="textarea-otros" placeholder="Especifique otros..."></textarea>





                    </div>
                </div>
            </form>

        </div>
    )
};

export default HIdentificacion;