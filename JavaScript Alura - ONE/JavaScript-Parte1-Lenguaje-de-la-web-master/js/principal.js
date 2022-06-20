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
    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(grasaTd);

    tabla.appendChild(pacienteTr);
});

var titulo = document.querySelector(".titulo");

titulo.textContent = "Buena Vida Nutrición";

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

    for(var i = 0;i< pacientes.length;i++){

        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector('.info-peso');
        var tdAltura = paciente.querySelector('.info-altura');
        var tdImc = paciente.querySelector('.info-imc');

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        var pesoEsValido = true;
        var alturaEsValida = true;  

        if(peso <=0 || peso >= 1000) {
            pesoEsValido= false;
            tdImc.textContent = 'peso incorrecto';
            paciente.classList.add("paciente-incorrecto");
        }
        
        if(altura <= 0 || altura >= 3.00) {
        alturaEsValida= false;
        tdImc.textContent = 'altura incorrecta';
        paciente.classList.add("paciente-incorrecto");
        }
        
        if(pesoEsValido && alturaEsValida) {
            var imc = peso / ( altura * altura);
            tdImc.textContent = imc.toFixed(2); 
        }
    }