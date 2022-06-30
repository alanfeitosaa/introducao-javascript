var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);



    if(erros.length > 0){
        document.querySelector("#mensagem-erro").innerHTML = "";
        for (var i = 0; i < erros.length; i++) {
            document.querySelector("#mensagem-erro").appendChild(montaLiErro(erros[i]));
        }
        // document.querySelector("#mensagem-erro").textContent = erros;
        return;
    }


    document.querySelector("#tabela-pacientes").appendChild(montaTr(paciente))

    form.reset();
    document.querySelector("#mensagem-erro").innerHTML = "";
});


function obtemPacienteDoFormulario(form){

    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaLiErro(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    return li
}

function montaTd(campo,classe) {
    var td = document.createElement("td");
    td.textContent = campo;
    td.classList.add(classe);
    return td
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    if(!validaNome(paciente.nome)) erros.push("Nome é inválido!");
    if(!validaGordura(paciente.gordura)) erros.push("Gordura é inválida!");

    return erros
}

