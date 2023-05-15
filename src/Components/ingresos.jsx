import React, {Fragment} from "react";
function Ingresos(paciente){
    return(
        <Fragment>
            <div class = "cita">
                <p>Nombre Mascota: <span>{paciente.nombre}</span></p>
                <p>Nombre Dueño: <span>{paciente.dueño}</span></p>
                <p>Fecha: <span>{paciente.fecha}</span></p>
                <p>Hora: <span>{paciente.hora}</span></p>
                <p>Síntomas: <span>{paciente.sintomas}</span></p>
            </div>
        </Fragment>
    
    );
}
export default Ingresos