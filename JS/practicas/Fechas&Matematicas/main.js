//fechas

console.log(new Date().getMonth()); //mes actual
console.log(new Date().getHours()); // hora actual 
console.log(new Date().getDay());  //dia actual

let fecha = new Date();

console.log(`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`)

let mes = new Date().toLocaleDateString('ja-JP', {month: 'long'}); //mes en japones 
console.log(mes);


//objectos matematicas


console.log(Math.PI);
console.log(Math.ceil(Math.E));
console.log(Math.round(Math.random() * 10));
console.log(Math.sqrt(7).toFixed(2))
