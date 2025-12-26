export function Button(label){
        const button = document.createElement("button");
        button.textContent = label;
        button.addEventListener('click', () => {
                console.log("Hello world");
        } );

        return button;
}