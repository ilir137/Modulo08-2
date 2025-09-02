import { pacientes } from "./modelo.js";
import { renderizarPacientes, mostrarSiHayPacientesEnEspecialidad } from "./ui.js";

import { 
    listadoPacientesPediatria, 
    listadoPacientesPediatriaYMenoresDe10, 
    listadoPacientesProtocoloUrgencia,
    listadoPacientesMedicoFamilia,
    listadoPacientesReasignadosAMedicoFamilia,
    spanHayPacientesPediatria,
    divNumeroPacientesPorEspecialidad
} from "./elementos.js";

import { 
    obtenerPacientesSegunEspecialidad, 
    obtenerPacientesAsignadosAPediatriaYMenorDeDiezAños, 
    activarProtocoloUrgencia,
    reasignaPacientes,
    hayPacientesEnLaEspecialidad,
    contarPacientesAsignadosAEspecialidad
} from "./motor.js";

const pacientesPediatria = obtenerPacientesSegunEspecialidad(pacientes, "Pediatra");
const pacientesPediatriaYMenoresDe10 = obtenerPacientesAsignadosAPediatriaYMenorDeDiezAños(pacientes);
const protocoloUrgencia = activarProtocoloUrgencia(pacientes)[1];
const pacientesMedicoFamilia = obtenerPacientesSegunEspecialidad(pacientes, "Medico de familia");
const pacientesReasignadosAMedicoFamilia = reasignaPacientes(pacientes, "Pediatra", "Medico de familia");
const hayPacientesDePediatria = hayPacientesEnLaEspecialidad(pacientes, "Pediatra");
const hayPacientesDeMedicoFamilia = contarPacientesAsignadosAEspecialidad(pacientes, "Medico de familia");
const hayPacientesDeCardiologia = contarPacientesAsignadosAEspecialidad(pacientes, "Cardiólogo");
const hayPacientesDePediatra = contarPacientesAsignadosAEspecialidad(pacientes, "Pediatra");


document.addEventListener('DOMContentLoaded', () => {
    renderizarPacientes(listadoPacientesPediatria, pacientesPediatria);
    renderizarPacientes(listadoPacientesPediatriaYMenoresDe10, pacientesPediatriaYMenoresDe10);
    renderizarPacientes(listadoPacientesProtocoloUrgencia, protocoloUrgencia);
    renderizarPacientes(listadoPacientesMedicoFamilia, pacientesMedicoFamilia);
    renderizarPacientes(listadoPacientesReasignadosAMedicoFamilia, pacientesReasignadosAMedicoFamilia);
    spanHayPacientesPediatria.textContent = mostrarSiHayPacientesEnEspecialidad(hayPacientesDePediatria, "Pediatria");
    divNumeroPacientesPorEspecialidad.textContent = `Número de pacientes en Pediatria: ${hayPacientesDePediatra}, en Cardiología: ${hayPacientesDeCardiologia}, en Médico de familia: ${hayPacientesDeMedicoFamilia}.`;


    console.log("Protocolo de Urgencia:", activarProtocoloUrgencia(pacientes)[0]);
    console.log(mostrarSiHayPacientesEnEspecialidad(hayPacientesDePediatria, "Pediatria"));
    console.log(hayPacientesDePediatra, hayPacientesDeCardiologia, hayPacientesDeMedicoFamilia);
});