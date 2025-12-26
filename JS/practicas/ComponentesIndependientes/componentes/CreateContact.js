 // @ts-check
export function CreateContact(){
    const form = document.createElement('form');
    form.innerHTML = `
    <input name="email" type:"email" placeholder="Ingrese el email">
    <input name="name" type:"text" placeholder="Ingrese el nombre">
    <button type:"button">Enviar</button>`;
    return form;
}