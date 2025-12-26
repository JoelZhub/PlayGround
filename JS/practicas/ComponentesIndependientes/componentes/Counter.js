export function Counter(){

    const div = document.createElement("div");
    let count  = 0;


    const button  = document.createElement("button");
    button.textContent = "Incrementar";

    button.onclick = () => {
        count++;
        div.querySelector("span").textContent = count;
    }

    div.innerHTML = `<span>${count}</span>`;
    div.appendChild(button);
    return div;
}