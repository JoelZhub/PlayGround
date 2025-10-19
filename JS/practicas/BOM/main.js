//BOM

// let c =confirm("Quieres continuar?");

// if(c){

//     document.writeln("Estas contiuando");

// }else{

//     document.writeln("No has continuado");
// }



//WINDOWS

document.writeln(window.outerHeight, "<br>"  ,window.outerWidth);


//Navigator

document.writeln(navigator.appName);

document.writeln(navigator.onLine);


//location

document.writeln(location.hostname);


//Historial del  BOM

// history.back();

// history.go();

// history.forward();


//Ventanas emergentes

let width = window.outerWidth;

let height = window.outerHeight;

let miWeb = window.open('ventana.html',

    'Ruta de aprendizaje',
     `width=${width} , height=${height}`

);

