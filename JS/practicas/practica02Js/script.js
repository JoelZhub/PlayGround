const msError = document.getElementById('error-messaje');

const email = document.getElementById('email');

const password = document.getElementById('password');

const btn = document.getElementById('btn-login');

const msEmail = document.getElementById('email-error');

if(email){


email.addEventListener("input", () => {

    const value = email.value.trim();   
    
    if(!(value.includes("@") && value.includes("."))){
        msEmail.classList.remove("hidden");
        email.classList.add("error-border")
       
    }else{
        msEmail.classList.add("hidden");
        email.classList.remove("error-border")
    }

});


btn.addEventListener("click", () => {

    if(email.value != "joel@gmail.com" && password.value!= "1234"){
        msError.classList.remove("hidden");
       setTimeout(() => msError.classList.add("hidden"), 3000);

    }else{

        const userName = email.value.trim();

        localStorage.setItem("usuario", userName);

        window.location.href = "home.html";
        
    }

});

}

const welcome = document.getElementById('welcome');

if(welcome){
const userName = localStorage.getItem("usuario");
welcome.innerText = userName ? `welcome ${userName}` : "welcome";   
localStorage.clear();
}





