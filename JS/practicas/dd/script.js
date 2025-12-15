
window.addEventListener("load", () => {

const btn =  document.querySelector("#btn");
const list = document.querySelector("#list");
const pelicula = document.querySelector("#pelicula");
const listPeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
const btnDelete = document.querySelector("#delete");

const date = new Date();
const dateA = date.toLocaleDateString();

enviarPelicula();
mostrarPeliculasAgregadas();

function enviarPelicula(){
    btn.addEventListener("click", () => {
        agregarPelicula(pelicula.value);
        localStoragePelicula(listPeliculas);
         mostrarPeliculasAgregadas();
        pelicula.value = "";
    });
}
function agregarPelicula(pelicula){
let popularidad = Math.floor(Math.random() * 100) + 1;
    listPeliculas.push (
            {
            namePelicula: `${pelicula}`,
            date: dateA,
            popularity: popularidad
        }
    );

}

function localStoragePelicula(list){
    localStorage.setItem("peliculas", JSON.stringify(list));
}

function mostrarPeliculasAgregadas(){
    list.innerHTML = "";
    let mostrarPeli = JSON.parse(localStorage.getItem("peliculas"));
     if(mostrarPeli.length === 0){
        list.innerHTML = "No hay peliculas";
    }else{
          mostrarPeli.forEach((peli, indice) => { 
                let li = document.createElement('li');
                li.textContent =
                `Name: ${peli.namePelicula}
                Date: ${peli.date}
                Popularity: ${peli.popularity}  
                `;
                let btn = document.createElement("button");
                btn.textContent = "eliminar";
                btn.id = `eliminar${indice}`;
                btn.setAttribute("data-id", indice);
                btn.addEventListener("click", () => eliminarPelicula(indice));
                li.append(btn);
                list.append(li);
              
               
        });

    }
}

function eliminarPelicula(indice){
    let peliculaExiste = listPeliculas;
    peliculaExiste.splice(indice, 1);
    localStorage.setItem("peliculas", JSON.stringify(peliculaExiste));
    mostrarPeliculasAgregadas();

}

});

