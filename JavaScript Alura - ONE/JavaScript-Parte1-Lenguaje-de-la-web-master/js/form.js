var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = capturarDatosPaciente(form);
    
    var tabla = document.querySelector("#tabla-pacientes");

    //Crear el Tr y los Td de la tabla
    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var grasaTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    grasaTd.textContent = paciente.grasa;
    imcTd.textContent = paciente.imc;
   
    //Asignación al tr d
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(grasaTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
});

function capturarDatosPaciente(form){
    
    var paciente = {
        
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        grasa: form.grasa.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    
    return paciente;
}