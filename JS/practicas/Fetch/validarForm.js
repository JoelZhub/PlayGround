export function validarForm(data){
    if(!data.email.includes('@')){
            return {isValid: false, message: 'Email invalid'};
    }if(!data.userName  || data.userName.length < 3){
          return {isValid: false, message: 'UserName invalid'};
    }
    return {isValid: true};
}
