export function renderizarPacientes(listadoPacientesPediatria, pacientesPediatria) {
    listadoPacientesPediatria.innerHTML = "";

    //const pacientesPediatria = obtenerPacientesAsignadosAPediatria(pacientes);

    if (pacientesPediatria.length === 0) {
        const noHayPacientesDiv = document.createElement("div");
        noHayPacientesDiv.textContent = "No hay pacientes.";
        listadoPacientesPediatria.appendChild(noHayPacientesDiv);
        return;
    } else {
        for (let i = 0; i < pacientesPediatria.length; i++) {
            const pacienteDiv = document.createElement("div");
            
            pacienteDiv.textContent = `
            ${pacientesPediatria[i].nombre} ${pacientesPediatria[i].apellidos}:
            Edad: ${pacientesPediatria[i].edad}, 
            Especialidad: ${pacientesPediatria[i].especialidad}`;

            listadoPacientesPediatria.appendChild(pacienteDiv);
        }
    }
}

export function mostrarSiHayPacientesEnEspecialidad(hayPacientes, especialidad) {
    if (hayPacientes) {
        return `Hay pacientes en ${especialidad}.`;
    } else {
        return `No hay pacientes en ${especialidad}.`;
    }
}