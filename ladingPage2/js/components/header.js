export function createHeader(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<header class="grid grid-cols-5 max-w-full min-h-14 
    text-4xl p-4
     bg-white border border-b-sky-950 items-center tracking-widest  text-sky-950 " >

     
    <div class="flex items-center col-span-3">
    <i class="bxr bx-core text-5xl "></i> 
    Lading <b class=" text-sky-700">Page</b>
    </div>

    <div class="sm:flex  hidden col-span-2 max-w-2xs gap-6 md:gap-8">
            <div class="flex items-center">
                    <input class=" border border-gray-400 px-9 rounded-sm w-46 md:w-2xs h-7 text-sm outline-none font-normal " type="text" placeholder="Buscar">
                    <i class="bx  bx-search absolute text-2xl px-2 "></i> 
            </div>

            <div class="flex items-center gap-1 md:gap-5" >
                <i class=" cursor-pointer text-2xl p-1.5 hover:border  hover:rounded-md  bx  bx-bell"></i> 

                <i class=" cursor-pointer text-2xl bx border border-gray-300
                rounded-md p-1.5 hover:bg-black hover:text-white  bx-night-light"></i> 
            </div>

    </div>
    </header>`;

    return wrapper.firstChild;
}