 //localStorage


console.log(localStorage.nombre);
localStorage.clear(localStorage.nombre);
console.log(localStorage.dh);

if(typeof(Storage) !== "undefined"){
    console.log("localStorage disponible");
}else{
    console.log("no disponible");
}

localStorage.setItem("nombre", "Joel");
document.querySelector("#nombre").textContent =  localStorage.getItem("nombre");


//guardar objectos y eliminar local Storage

let animal = {

    especie : "elefante",
    nombre: "ete",
    color: "Gris"
};

localStorage.setItem("animal", JSON.stringify(animal));

//recuperar objectos

let animalJs = JSON.parse(localStorage.getItem("animal"));
console.log(animalJs);


//remove item y limpiar el storage
localStorage.removeItem("animal");
localStorage.clear();