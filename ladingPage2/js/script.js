import { createHeader } from "./components/header.js";
const header = document.querySelector('#header');
header.appendChild(createHeader());

import { createNavBar } from "./components/navBar.js";
const nav = document.querySelector('#navBar');
nav.appendChild(createNavBar());


const app = document.querySelector('#app');

