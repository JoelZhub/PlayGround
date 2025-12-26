const header = document.querySelector("#header");

// import { Button } from "./componentes/Button.js";
// app.appendChild(Button("Saludar"));

// import { Counter } from "./componentes/Counter.js";
// app.appendChild(Counter());

import { NavBar } from "./componentes/NavBar.js";
import { Navigate } from "./navigation/Navigate.js";

header.appendChild(NavBar(Navigate));

Navigate("home");