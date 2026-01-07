import { createElementSlide } from "./sliderComponent.js";

export function createSlider(){

    const sectionSlider = document.createElement('section');
    sectionSlider.className = `relative max-w-full min-h-96 p-4 `;

    const divBtns = document.createElement('div');
    divBtns.className = `flex items-center  p-4 justify-between`;

    const arrowL = document.createElement('i');
    arrowL.className = `text-2xl absolute  left-4   top-1/2 -translate-y-1/2  cursor-pointer bg-sky-900 p-2 md:text-3xl rounded-md text-white bx  bx-caret-big-left`;

    const arrowR = document.createElement('i');
    arrowR.className =  `text-2xl absolute right-4 top-1/2 -translate-y-1/2   cursor-pointer md:text-3xl p-2 bg-sky-900 rounded-md text-white bx  bx-caret-big-right`;

    divBtns.appendChild(arrowL);
    divBtns.appendChild(arrowR);

   const slide1 =  createElementSlide({id:1, imgUrl:'./assets/slide.jpg', alt:'slide1'});

    
    sectionSlider.appendChild(divBtns);
    sectionSlider.appendChild(slide1);

   return sectionSlider;
}