export function obtenerPacientesSegunEspecialidad(pacientes, especialidad) {
    return pacientes.filter(paciente => paciente.especialidad === especialidad);
}

export function obtenerPacientesAsignadosAPediatriaYMenorDeDiezAños( pacientes ) {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

export function activarProtocoloUrgencia( pacientes ) {
    const pacientesEnProtocolo = pacientes.filter(paciente => paciente.temperatura > 39 || paciente.frecuenciaCardiaca > 100);
    const activarProctolo = pacientes.some(paciente => paciente.temperatura > 39 || paciente.frecuenciaCardiaca > 100);

    return [activarProctolo, pacientesEnProtocolo];
}

export function reasignaPacientes(pacientes, especialidad, nuevaEspecialidad) {
    const pacientesEspecialidad = pacientes.filter(paciente => paciente.especialidad === especialidad);;

    const pacientesReasignados = pacientesEspecialidad.map(( paciente) => ({
        ...paciente,
        especialidad: paciente.especialidad === especialidad ? nuevaEspecialidad : paciente.especialidad
    }));

    return pacientesReasignados;
}

export function hayPacientesEnLaEspecialidad(pacientes, especialidad) {
    return pacientes.some((paciente) => paciente.especialidad === especialidad);
}

export function contarPacientesAsignadosAEspecialidad( pacientes, especialidad ) {
    var numPacientes = 0;

    pacientes.forEach(( paciente ) => {
        if ( paciente.especialidad === especialidad ) {
            numPacientes++;
        }
    });
    
    return numPacientes;
}
