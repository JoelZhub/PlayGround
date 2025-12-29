import {CreateUser}  from "./User/CreateUser.js";

//fetch 

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(res => res.json())
  .then(data => {
      const user = new CreateUser(data);
      console.log(user.getDescripcion());
  });

//  function ReconstruirObjecto (data){    
//      const user =  new CreateUser(data); 
//      return user;
//   }
//   console.log(user.getDescripcion());


