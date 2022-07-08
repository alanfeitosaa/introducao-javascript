const botaoBuscar = document.querySelector("#buscar-pacientes");
const erro = document.querySelector("#erro-ajax");

botaoBuscar.addEventListener("click", function (){
    console.log("Buscando Pacientes...");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function (){
        if(xhr.status === 200){
            erro.classList.add("invisivel");
            const pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function (paciente){
                adicionaPAcienteNaTabela(paciente)
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel");
        }


    })
    xhr.send();
})