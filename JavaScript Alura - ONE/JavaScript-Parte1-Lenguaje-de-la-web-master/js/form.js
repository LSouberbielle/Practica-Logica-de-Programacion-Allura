var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var grasa = form.grasa.value;

    var tabla = document.querySelector("#tabla-pacientes");

    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var grasaTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    grasaTd.textContent = grasa;
    imcTd.textContent = calcularIMC(peso,altura);
    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(grasaTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
});