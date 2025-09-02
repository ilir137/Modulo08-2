export function obtenerPacientesSegunEspecialidad(pacientes, especialidad) {
    const pacientesPediatria = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === especialidad) {
            pacientesPediatria.push(pacientes[i]);
            console.log(`El paciente ${pacientes[i].nombre} ${pacientes[i].apellidos} está asignado a ${especialidad}.`);
        }
    }

    return pacientesPediatria;
}

export function obtenerPacientesAsignadosAPediatriaYMenorDeDiezAños( pacientes ) {
    const pacientesPediatria = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesPediatria.push(pacientes[i]);
        }
    }
    
    return pacientesPediatria;
};

export function activarProtocoloUrgencia( pacientes ) {
    const pacientesEnProtocolo = [];
    let activarProctolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].temperatura > 39 || pacientes[i].frecuenciaCardiaca > 100) {
            console.log(`Activando protocolo de urgencia para el paciente: ${pacientes[i].nombre} ${pacientes[i].apellidos}`);
            pacientesEnProtocolo.push(pacientes[i]);
            activarProctolo = true;
        }
    }

    return [activarProctolo, pacientesEnProtocolo];
}

export function reasignaPacientes(pacientes, especialidad, nuevaEspecialidad) {
    const pacientesReasignados = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === especialidad) {

            pacientes[i].especialidad = nuevaEspecialidad;
            pacientesReasignados.push(pacientes[i]);
            console.log(`El paciente ${pacientes[i].nombre} ${pacientes[i].apellidos} ha sido reasignado a ${nuevaEspecialidad}.`);
        }
    }

    return pacientesReasignados;
}

export function hayPacientesEnLaEspecialidad(pacientes, especialidad) {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === especialidad) {
            return true;
        }
    }
    return false;
}

export function contarPacientesAsignadosAEspecialidad( pacientes, especialidad ) {
    var numPacientes = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === especialidad) {
            console.log(pacientes[i]);
            numPacientes++;
        }
    }
    return numPacientes;
}