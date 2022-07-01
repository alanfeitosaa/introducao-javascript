document.querySelector("table").addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function (){
        event.target.parentNode.remove();
    },600);
})



/*
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    event.target.remove();
})
*/





/*
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click");
        this.remove();
    })
})
*/
