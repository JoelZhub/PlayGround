const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");

const suma = document.getElementById("btn-s");
const resta = document.getElementById("btn-r");
const multi = document.getElementById("btn-m");
const dividir = document.getElementById("btn-d");
const inputR = document.getElementById("result");

dividir.addEventListener("click", () => {

let v1 =  Number(n1.value);
let v2 = Number(n2.value);
    
if(v2 == 0 ){
  
    inputR.value = " No se puede dividir entre 0";
}else{


const result = v1 / v2; 
    
inputR.value = result.toPrecision();
}


});
multi.addEventListener("click", () => {

let v1 =  Number(n1.value);
let v2 = Number(n2.value);
const result = v1 * v2;
    
inputR.value = result;


});

suma.addEventListener("click", () => {

let v1 =  Number(n1.value);
let v2 = Number(n2.value);
const result = v1 + v2;
    
inputR.value = result;


});

resta.addEventListener("click", () => {

let v1 =  Number(n1.value);
let v2 = Number(n2.value);
const result = v1 - v2;
    
inputR.value = result;


});