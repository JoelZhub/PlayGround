import { apiUser } from "./apiUser.js";

export async  function obtenerUser( data, retry = 2){
    try{
        const  rest = await apiUser('https://jsonplaceholder.typicode.com/users/2');
        if(!rest.ok){
            if(rest.status >= 400  && rest.status < 500){
                console.warn('Credenciales incorrectas');
            }if(rest.status > 500){
                console.warn('fallo al obtener los datos del usuario');
            }
        }
        const dt = await rest.json();

        if(dt.username === data.userName && dt.email === data.email){
            const data  = {
                username: dt.username,
                email: dt.email
            };
            return data;
        }
        return null;
        
    }catch(error){

        if(error.name === 'AbortError'){
            console.warn('tiempo agotado');
        }
        else if(error instanceof TypeError){
            console.warn('Red con mucho trafico intente de nuevo mas tarde');
            obtenerUser(retry - 1);
        }else{
            console.warn('tiempo agotado');
        }
    }

}