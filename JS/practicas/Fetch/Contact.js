import { CreateContact } from "./componente/CreacteContact.js";
import { obtenerUser } from "./obtenerUser.js";
import { User } from "./User.js"; 
import { validarForm } from "./validarForm.js";

export function Contact() {
    const section = document.createElement('section');
    const form =  CreateContact();
     form.onsubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const result =  validarForm(data);
        if(!result.isValid){
                console.log('Rellene los campos correctamente');
        }
        const user = await obtenerUser(data, 2);
        if(user == null){
            console.log('Usuario no encontrado');
        }else{
            const userName = new User(user);
            console.log(`Bienvenido ${userName.getUserName()}`);
        }

    }
    section.append(form);
    return section;

}