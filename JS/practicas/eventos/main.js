//Eventos

const btn = document.querySelector("#btn");
const btnD = document.querySelector("#btn-doble");
const campo = document.querySelector("#campo");

btn.addEventListener("click", ()=>{


        btn.textContent = "dhdhdd";
    

});

btnD.addEventListener("dblclick", ()=>{


    // document.writeln("Haz dado dos click");


});

btnD.addEventListener("mouseover", ()=>{
    btnD.style.background = "red";
});

btnD.addEventListener("mouseout", ()=>{

btnD.style.background = "";    

});

btnD.addEventListener("mousemove", ()=>{

btnD.style.color = "blue";

});


//eventos de teclado
campo.addEventListener("keydown", (event)=>{
    console.log("presionaste la tecla: " + event.key);
});

campo.addEventListener("keyup", (event)=>{
    console.log("soltaste la tecla: " + event.key);
});

campo.addEventListener("keypress", (event)=>{
    console.log("mantuviste la tecla: " + event.key);
});


//eventos forms

const form = document.querySelector("#form");


form.addEventListener("submit", (event)=>{
    
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#email").value;
    alert(`hola ${nombre} tu email es ${correo}`);

});

// event input
const correo = document.querySelector("#email")
const inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", ()=>{
let valor = inputNombre.value.trim();

   if(!(valor.includes("@") && valor.includes("."))){
    campo.value = "Ingrese un email valido";
   }else{
    campo.value = "Email valido";
   }

});

//focus detecta cuando entras al focus
correo.addEventListener("focus", ()=>{

     campo.value = "Estas en el email";

});

//


//EVENTOS VENTANA DEL NAVEGADOR


document.addEventListener("DOMContentLoaded", ()=>{

    console.log("TODO EL DOM ESTA CARGADO");

});

window.addEventListener("load", ()=>{

    console.log("recursos cargados");

});

window.addEventListener("resize", ()=>{

    console.log("Ventana pequeña");

});

window.addEventListener("scroll", () =>{


    console.log("Estas en el pixel" + Math.round(window.scrollY));

});


const porta = document.querySelector("#portapapeles");

//eventos portapapeles ->

porta.addEventListener("copy", () =>{

    console.log("No se puede copiar en este input");
    navigator.clipboard.writeText("");

});

porta.addEventListener("paste", () =>{

    console.log("pegado");

});

porta.addEventListener("cut", () =>{

    console.log("cortado");

});

porta.addEventListener("contextmenu", (event) => {

   event.preventDefault();
    console.log("mENU CONTEXTUAL ABIERTO");

});


//Eliminar eventos y dejar de escuchar eventos

const  bt = document.querySelector("#btn2");

function x(){
    alert("TE LA BEBISTE GOKU");
}

bt.addEventListener("click", x);

setTimeout(() => {

    bt.removeEventListener("click", x);

    alert("ahora si te al bebiste GOKU");

}, 10000);


//propagacion


const cajaPadre = document.querySelector("#cajaPadre");

const bt1 = document.querySelector("#btn3");

cajaPadre.addEventListener("click", () => {


    alert("dhddhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

});

bt1.addEventListener("click", (event) => {

    event.stopPropagation();
    alert("hhhhhhhhhhh");

});
