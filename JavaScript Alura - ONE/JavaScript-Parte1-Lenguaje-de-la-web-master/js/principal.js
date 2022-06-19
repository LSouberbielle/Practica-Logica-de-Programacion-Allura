var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();
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