export function renderizarPacientes(listadoPacientesPediatria, pacientesPediatria) {
    listadoPacientesPediatria.innerHTML = "";

    //const pacientesPediatria = obtenerPacientesAsignadosAPediatria(pacientes);

    if (pacientesPediatria.length === 0) {
        const noHayPacientesDiv = document.createElement("div");
        noHayPacientesDiv.textContent = "No hay pacientes.";
        listadoPacientesPediatria.appendChild(noHayPacientesDiv);
        return;
    } else {
        pacientesPediatria.forEach(paciente => {
            const pacienteDiv = document.createElement("div");
            
            pacienteDiv.textContent = `
            ${paciente.nombre} ${paciente.apellidos}:
            Edad: ${paciente.edad}, 
            Especialidad: ${paciente.especialidad}`;

            listadoPacientesPediatria.appendChild(pacienteDiv);
        });
    }
}

export function mostrarSiHayPacientesEnEspecialidad(hayPacientes, especialidad) {
    if (hayPacientes) {
        return `Hay pacientes en ${especialidad}.`;
    } else {
        return `No hay pacientes en ${especialidad}.`;
    }
}
