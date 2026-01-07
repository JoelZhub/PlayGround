import { createHeader } from "./components/header.js";
const header = document.querySelector('#header');
header.appendChild(createHeader());

import { createNavBar } from "./components/navBar.js";
const nav = document.querySelector('#navBar');
nav.appendChild(createNavBar());


import { createSlider } from "./components/slider.js";
const app = document.querySelector('#app');
app.appendChild(createSlider());