const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Luis", active: false },
  { id: 3, name: "Marta", active: true }
];


let cont = 0;
users.forEach(user => {
    if(user.active){
         console.log(`name: ${user.name} `);
        cont = cont +1; 
    } 
    user.rol = "user";
  
});

console.log(users);
console.log(`Total element: ${cont}`);


//exercise 2


const list = document.querySelector("#list");

function getUsersActive(users){
    const activeUsers = [];
    
    users.forEach(user => {

        if(user.active)  activeUsers.push(user);

    });
    return activeUsers;
}


function addUsers(){
   const activeUsers = getUsersActive(users);   
   
    activeUsers.forEach(user => {
            if(user.active){
                let li = document.createElement("li");
                li.textContent = `Name: ${user.name}  State: ${user.active}`;
                list.append(li);
            }
    });

   
}

addUsers();

const btn = document.querySelector("#btn");
const conteo = document.querySelector("#contador");
let counter = 1;
function listenBtn(){
    btn.addEventListener("click", () => {
            changeText(btn);
            updateCounter(conteo);
    });
}

function changeText(btn){
    btn.textContent = "Come back, click on me";
}
function updateCounter(conteo){

    conteo.textContent = counter;
    counter += 1;
}

listenBtn();


const text = document.querySelector("#text");
const textLengeth = document.querySelector("#textLengeth");
let valueText;

function listenText(){
    text.addEventListener("input", () => {
       changeLength(text);
    });
}

function changeLength(text){
     valueText = text.value;
     if(valueText.length > 20) console.warn("La longitud es mayor a 20 caracteres");
     textLengeth.textContent = valueText.length;    
}
listenText();

let user = {
    name: "Joel",
    lastName: "Benitez",
    age: 19
};

let userJson = JSON.stringify(user);
localStorage.setItem("user",userJson);
let newUser =  JSON.parse(localStorage.getItem("user"));

console.log(newUser);