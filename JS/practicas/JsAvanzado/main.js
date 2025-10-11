
//Manejo del document

const caja = document.getElementById('articulos');

caja.style.display = "flex";
caja.style.Width = "50%";
caja.style.padding = "20px";
caja.style.justifyContent = "space-around";

// caja.style.display = "flex";
// caja.style.justifyContent = "space-between";

// for(el of element){

//     el.style.padding = "10px 20px";
//     el.style.background = "#000";
//     el.style.color = "#fff";
//     el.style.maxWidth = "200px";

// }
// element.innerHTML = "<h2> Hola soy joel </h2>";

// console.log(element);



// class Name

// let articulos = document.getElementsByClassName("articulo");

// for(let i = 0; i < articulos.length; i++){

//         articulos[i].classList.add('articuloBase');

//         // articulos[i].innerHTML += "<a href ='#'> Leer mas </a>";

//         let enlace = document.createElement("a");
//         enlace.setAttribute("href", "#");

//         let text = document.createTextNode("Leer mas");
//         enlace.append(text);
//         articulos[i].append(enlace);

//         if(i === 1){
//             articulos[i].classList.add('articuloDiferent');
//         }
//         if(i === articulos.length - 1){
//             articulos[i].classList.add('articuloUltimo');
            
//         }

// }


//Tag Name


// let etiqueta = document.getElementsByTagName("article");

// etiqueta[0].style.backgroundColor = "black";
// etiqueta[0].style.color = "#fff";


//Query Selector  -> selecciona un elemento

// let articulo  = caja.querySelector(".articulo");

// //Query selecto All

// let seccionArticulos  = caja.querySelectorAll(".articulo");

// for(let art of seccionArticulos ) {
    
//     art.style.background = "green";
//     art.style.margin = "10px";
// }


//contenido



const tarjeta = document.querySelector('.articulo');

// tarjeta.textContent = "Contenido nuevo";

// tarjeta.innerHTML = "Contenido html";


