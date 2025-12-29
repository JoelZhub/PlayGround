import {CreateUser}  from "./User/CreateUser.js";

import { CreateUserPost } from "./User/CreateUserPost.js";

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
//      let  res = await fetch('https://jsonplaceholder.typicode.com/users/');
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