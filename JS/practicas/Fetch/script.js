// import {CreateUser}  from "./User/CreateUser.js";

// import { CreateUserPost } from "./User/CreateUserPost.js";

//fetch 


//sacar datos de un backend 

// fetch('https://jsonplaceholder.typicode.com/users/2')
//   .then(res => res.json())
//   .then(data => {
//       const user = new CreateUser(data);
//     //   console.log(user.getDescripcion());
//   })
//   .catch(console.error("ERROR EN LA SOLICITUD AL SERVIDOR "));


//  function ReconstruirObjecto (data){    
//      const user =  new CreateUser(data); 
//      return user;
//   }
//   console.log(user.getDescripcion());



//guardar  informacion  

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8" 
//     },
//      body: JSON.stringify(new CreateUserPost('de', 'bar', 23))
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data);

// }).catch(error => {
//     console.error("Error en la solicitud post " + error);
// });


//asyn /await

// async function listUsers (){
// try{
//     let  res = await fetch('https://jsonplaceholder.typicode.com/users/');
//     let data = await res.json();
//     data.forEach(element => {
//             const user = new CreateUser(element);
//             console.log(user.getDescripcion());
//         });

// }catch(error){
//             console.error("Error: " + error);
//     }
// }

// listUsers();



//promesas


// let myPromise = new Promise((resolve, reject) => {
//     let correct = true;
//     setTimeout(() => {
//         if(correct){
//             let movie = {
//                 title: "avengers",
//                 category: "action",
//                 age: 2019
//             };

//             resolve(movie);

//     }else{
//         reject("NO SE HA CUMPLIDO");
//     }
//     }, 3500)
   
// });

// myPromise 
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });


//     alert("hola");


// function listUsers(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              fetch('https://jsonplaceholder.typicode.com/users/')
//             .then(res => res.json())
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//         }, 3500)
       
//     });


// }
// console.log(listUsers());
// alert("esperando respuesta del backend");

//promesas encadenadas 

// function servirPizza(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("pizza servida")
//         }, 2500);
//     });
// }

// function servirHamburgueza(){
//      return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("hambugueza servida")
//         }, 3000);
//     });
// }
// function servirHotDog(){
//      return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("HotDog servido")
//         }, 4000);
//     });
// }

// // servirPizza()
// //     .then(result=> {
// //         console.log(result);
// //         return  servirHamburgueza();
// //     })
// //     .then(result2 => {
// //         console.log(result2);
// //         return servirHotDog();
// //     })
// //     .then(result3 => {
// //         console.log(result3);

// //     }).catch(error => {
// //         console.error(error);
// //     });


// //promesas asyn y await 

// // async function servirPlatos(){
// //     try{
// //         let result1 = await servirPizza();
// //         console.log(result1);

// //         //lanzamiento de error

// //         if(result1 != "peperroni"){
// //             throw new Error("La pizza no es la solicitada");
// //         }
// //         let result2 = await servirHamburgueza();
// //         console.log(result2);
// //         let result3 = await  servirHotDog();
// //         console.log(result3);

// // }catch(error){
// //     console.warn(error);
// // }

// // }
// // servirPlatos();


// //Ejercicio 1:

// async function  Usuarios(){
//      try{
//          let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         if(!res.ok){
//             throw new Error(`Fallo en la lectura de los datos ${res.status} `);
//         }
//         let data = await res.json();
//         console.log(data);
        
//      }
//      catch(error){
//         console.warn(error.message);

//      }

// }
// // Usuarios();

// async function getUsuarios(){
//     let rest = await fetch('https://jsonplaceholder.typicode.com/users');
    
//     if(!rest.ok){
//         throw new Error(`Usuario fallo ${rest.status}`);
//     }
//     return await rest.json();
// }
// async function getPosts(){
//     let rest  = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if(!rest.ok){
//         throw new Error(`Posts fallo ${rest.status} ${rest.statusText}`);
//     }
//     return await rest.json();
// }

// async function cargarContenido(){

//     try{
//         const [users, posts] = await Promise.all([
//             getUsuarios(),
//             getPosts()
//         ]);

//         console.log('todo correcto');
//         console.log(users, posts);
       

//     }catch(error){
//         console.warn(error);
//     }
// }

// // cargarContenido();

// // async function cargarUsuarios(){
// //     const controller = new AbortController();
// //     try{
// //         const  rest =  await fetch('https://jsonplaceholder.typicode.com/users', {Signal : controller.signal});
// //         if(!rest.ok){
// //             throw new Error(`Error en la lectura de los datos ${rest.status} ${rest.statusText}`);
// //         }
// //         const data = await rest.json();
// //         console.log(data);

// //     }catch(error){
// //         if(error.name === 'AbortError'){
// //             console.warn('Peticcion cancelada');
// //         }else{
// //             console.warn(`Error real: ${error}`);
// //         }
// //     }
// //     setTimeout(() => {
// //         controller.abort()
// //     }, 10);   
// // }


// async function cargarUsuarios(url, timeoutMs){
//     const controller = new AbortController();
//     setTimeout(() => controller.abort(), timeoutMs);

//     try{
//         const rest = await fetch(url, { signal: controller.signal });
//         return await rest.json();

//     }catch(error){
//         if(error.name === 'AbortError'){
//             console.warn(`Timeout Alcanzado request cancelada`);
//         }else{
//             throw error;
//         }
//     }
// }

// // cargarUsuarios('https://jsonplaceholder.typicode.com/users', 1);


// // fetch retry 

// async function fetchWithTimeout(url, option = {}, timeOut = 5000){

//     const controller = new AbortController();
//     const id = setTimeout(() => controller.abort(), timeOut);
//     return await fetch(url, {
//         ...option,
//         signal: controller.signal,
//     }).finally(() => clearTimeout(id));
// }

// async function fetchWithRetry(retries = 2){
//     try{
//         const rest =  await fetchWithTimeout(url, {}, 1000);
//         if(!rest.ok) throw new Error(`HTTP ${rest.status}`);
//         const data = await rest.json();
//         console.log(data);

//     }catch(error){
//         if(retries === 0)  throw error;
//         return fetchWithRetry(retries - 1);
//     }

// }

// // fetchWithRetry(2);


async function verUser(){

    try{
    const rest = await fetch('https://jsonplaceholder.typicode.com/users/2');
    if(!rest.ok){
        if(rest.status >= 400  && rest.status < 500){
            console.log('data invalida')
        }if(rest.status >= 500){
            console.log('error en la obtencion de la data');
        }
    }    
    const data = await rest.json();
    console.log(data);

} catch(error){

    if(error.name === 'AbortError'){
        console.warn('tiempo de espera agotado');
    }else if(error instanceof TypeError){
            console.warn('red cogestionada intente de nuevo ma tarde');
    }else{
        console.warn('Error en la llamada de la API');
    }
}
}

verUser();

const app = document.querySelector('#app');

import { Contact } from "./Contact.js";

app.innerHTML = "";

app.appendChild(Contact());
