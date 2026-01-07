export function createHeader(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<header 
    class="grid 
    grid-cols-6
    md:grid-cols-12
    max-w-full 
    min-h-14 
    md:text-4xl p-4
    text-2xl
bg-white
  items-center 
  tracking-widest
 text-sky-950 " >
     
    <div class="flex items-center col-span-4  md:col-span-8">
    <i class="bxr bx-core text-3xl  md:text-5xl "></i> 
        Lading <b class=" text-sky-700">Page</b>
    </div>

    <div class="flex mt-2.5 col-span-2 gap-10 md:mt-0 max-w-2xs md:col-span-4  md:gap-4">
            <div class="flex max-w-full items-center">
                    <input class="border hidden
                    md:flex
                    border-gray-400 
                    px-9 
                    rounded-sm   
                    h-7
                    text-sm 
                    outline-none
                    font-normal " 
                
                    type="text" placeholder="Buscar">
                    <i class="bx  bx-search absolute text-2xl px-2 "></i> 
            </div>
            <div class="flex max-w-full items-center gap-2 md:gap-5" >
                <i class=" cursor-pointer md:text-2xl p-1.5 hover:border  hover:rounded-md  bx  bx-bell"></i> 
                <i class=" cursor-pointer md:text-2xl bx border border-gray-300
                rounded-md p-1.5 hover:bg-black hover:text-white  bx-night-light"></i> 
            </div>

    </div>
    </header>`;

    return wrapper.firstChild;
}