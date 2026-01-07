export function createElementSlide( {id, imgUrl, alt} ){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div id="${id}"
    class=" shrink-0 w-full sm:h-96 h-72   ">
    <img  class="object-cover rounded-3xl  w-full h-full" src="${imgUrl}" alt="${alt}" >
    </div>`;

    return wrapper.firstChild;
}