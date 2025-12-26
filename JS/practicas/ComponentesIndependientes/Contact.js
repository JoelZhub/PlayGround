import { ContactValidate } from "./validator/ContactValidate.js";
import { CreateContact } from "./componentes/CreateContact.js";

export function Contact(){
    const section = document.createElement('section');
    const form = CreateContact();
    form.onsubmit = (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form));
            const result = ContactValidate(data);
            if(!result.isValid){
                alert(result.message);
                return;
            }
            console.log("Enviando datos", data);
    };
    section.appendChild(form);
    return section;
}