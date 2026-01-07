export function createNavBar(){
    
    const wrapper = document.createElement('nav');
    
    wrapper.innerHTML = `<nav class="p-4 min-h-14 bg-sky-900 text-white  max-w-full "> 
            <ul class="flex items-center gap-14">
                <li class=" font-medium tracking-wide    border-b-2    " ><a href="/inicio" data-link>Inicio</a></li>
                <li class=" font-medium tracking-wide  hover:border-b-2  " ><a href="/Reloj" data-link>Reloj</a></li>
                <li class=" font-medium tracking-wide  hover:border-b-2 " ><a href="/SobreMi" data-link>Sobre Mi</a></li>
                <li class=" font-medium tracking-wide   hover:border-b-2 " ><a href="/Contacto" data-link>Contacto</a></li>

            </ul>
    
    </nav>`; 

    return wrapper.firstChild;

}