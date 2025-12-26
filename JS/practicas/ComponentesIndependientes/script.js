
// @ts-check

//creando componente base 
import { Button } from "./componentes/Button.js";
document.body.appendChild(Button("Saludar"));

import { Counter } from "./componentes/Counter.js";
document.body.appendChild(Counter());

import { Contact } from "./Contact.js";
document.body.appendChild(Contact());