export function CreateContact(){
     const form = document.createElement('form');
     form.innerHTML = `
        <input type="text" name = "userName" placeholder = "Enter your UserName">
        <input type ="text" name = "email" placeholder = "Enter your email">
        <button type="submit">Log In</button>
     `;
     return form;
}