export function NavBar(onNavigation){

    const nav = document.createElement('nav');

    nav.innerHTML = `
        <ul>
        <li> <a href="#" data-route="home">Home</a></li>
         <li> <a href="#" data-route="contact">Contact</a></li>
        </ul>
    `;

    nav.addEventListener("click", (e) =>{
        if(e.target.tagName !== "A") return;
        e.preventDefault();
        // const route = e.target.dataset.route;
        onNavigation(e.target.dataset.route);
    });

    return nav;
}