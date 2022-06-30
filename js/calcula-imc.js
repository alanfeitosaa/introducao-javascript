var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Calculadora de IMC";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var nomePaciente = paciente.querySelector(".info-nome").textContent;
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;
    var imcPaciente = paciente.querySelector(".info-imc");
    var imc = pesoPaciente / (alturaPaciente * alturaPaciente);

    var validacaoPeso = validaPeso(pesoPaciente);
    var validacaoAltura = validaAltura(alturaPaciente);
    var validacaoNome = validaNome(nomePaciente);

    if (!validacaoPeso){
        imcPaciente.textContent = "Peso inválido!";
        validacaoPeso = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!validacaoAltura){
        imcPaciente.textContent = "Altura inválida!";
        validacaoAltura = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!validacaoNome){
        imcPaciente.textContent = "Nome inválido!";
        validacaoNome = false;
        paciente.classList.add("paciente-invalido");
    }

    if (validacaoPeso && validacaoAltura && validacaoNome){
        imcPaciente.textContent = imc.toFixed(2)
    }

}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso > 0 && peso < 500) {
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3.0) {
        return true;
    }else {
        return false;
    }
}

function validaNome(nome){
    if (nome.length > 0) {
        return true;
    }else {
        return false;
    }
}

function validaGordura(gordura){
    if (gordura > 0) {
        return true;
    }else {
        return false;
    }
}