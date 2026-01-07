export function createNavBar(){
    
    const wrapper = document.createElement('nav');
    
    wrapper.innerHTML = `<nav class="p-4 fixed  min-h-14  bottom-0 inset-x-0  sm:flex sm:static  bg-sky-900 text-white  max-w-full "> 
            <ul class="flex items-center justify-center  gap-10 sm:gap-14">
            
                <li class=" flex flex-col sm:flex-row sm:gap-2.5 items-center text-[15px]  sm:text-xl  sm:font-medium sm:tracking-wide   ">
                <i class="bx  bx-home"></i> 
                <a class=" sm:border-b-2 " href="/inicio" data-link>Inicio</a>
                
                </li>
                <li class=" flex flex-col sm:flex-row sm:gap-2.5 items-center text-[15px]  sm:text-xl sm:font-medium sm:tracking-wide    " >
                <i class="bx  bx-clock"></i> 
                <a class="sm:hover:border-b-2 " href="/Reloj" data-link>Reloj</a>
                
                </li>
                <li class="flex flex-col sm:flex-row sm:gap-2.5 items-center text-[15px]  sm:text-xl  sm:font-medium sm:tracking-wide  " >
                <i class="bx  bx-community"></i> 
                <a class=" sm:hover:border-b-2" href="/SobreMi" data-link>Sobre Mi</a>

                </li>
                <li class="flex flex-col sm:flex-row sm:gap-2.5 items-center text-[15px] sm:text-xl   sm:font-medium sm:tracking-wide  " >
                <i class="bx bx-message"></i> 
                <a class=" sm:hover:border-b-2 " href="/Contacto" data-link>Contacto</a>
                </li>

            </ul>
    
    </nav>`; 

    return wrapper.firstChild;

}