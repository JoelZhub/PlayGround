import { Home } from "../Home.js";
import { Contact } from "../Contact.js";

const routes  = {
 home: Home,
 contact : Contact
};

export function Navigate(route){

    const app = document.querySelector("#app");
    app.innerHTML = "";

    const page = routes[route];
    if(!page) return;
   
    app.appendChild(page());
}