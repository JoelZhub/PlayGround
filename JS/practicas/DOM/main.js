
// const element = document.getElementById('demo');

// element.innerHTML= "Hello world";

// element.attribute = "Hello";


// //crear elemento html

// // let div = document.createElement("div");

// // div.textContent = "Hello world from the div";

// // document.body.appendChild(div);

// let url = document.URL;

// document.writeln(url);

// let cookie = document.cookie;

// document.writeln(cookie);

// let html = document.documentElement;

// document.writeln(html);


// // DOM FORMS

// const p = document.getElementById("demo");

// function myFunction(){

//     let input = document.getElementById("input").value;
    
//     if(isNaN(input) || input < 1 || input > 10){

//         p.innerHTML = "Input is invalid";
//     }else{

//         p.innerHTML = "Input valid";
//     }


// }

// let div = document.createElement("div");
// let p1 = document.createElement("p");
// let h1 = document.createElement("h1");

// p1.textContent = "Hello world";
// h1.textContent = "Title";

// div.appendChild(h1);
// div.appendChild(p1);

// div.classList.add("box")

// document.body.appendChild(div);



function myMove(){
        
        const element = document.getElementById("animate");
        let id = null;
        let post =0;

        clearInterval(id);

        id = setInterval(()=>{
        if(post == 300){
            // clearInterval(id);
            // post -= post;
            // element.style.top =  post + 'px';
            //  element.style.left =  post + 'px';

        }else{
            post++;
            element.style.top = post + 'px';
            element.style.left = post + 'px';

        }



        },5);

       

}