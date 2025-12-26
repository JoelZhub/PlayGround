export function  ContactValidate(data){
    if(!data.email.includes("@")){
        return {isValid: false, message: 'Email invalido'};
    }
    if(!data.name || data.name.length < 3){
        return {isValid: false, message: 'Nombre invalido'};
    }

    return {isValid: true};

}