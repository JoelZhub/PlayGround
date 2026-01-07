export function createElementSlide({id, imgUrl, alt}){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div id="${id}"
    class="max-w-full  ">
    <img class="" href="${imgUrl}" alt="${alt}" >
    </div>`;


 return wrapper.firstChild;
}