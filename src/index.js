//ASI SERIA CON UN JS NORMAL
/*const element = document.createElement("h1");
element.innerHTML = " Hello , plat Badges!";

const container = document.getElementById("app");

container.appendChild(element);*/

//AHORA DE LA MANERA REACT CON REACTDOM

import React from "react"; //
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

//importando un componente
//import Badge from "./components/Badge";
//import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
//Importando estilos globales
import "./global.css";

//const jsx = <h1>Hello , plat desde Reac</h1>; //esto es gracias a JSX

//jsx y elemnt equivalen a lo mismo solo que uno es JSX y otro es componente de react

//                                   etiqueta,atributo,informacion o contenido
/*const element = React.createElement(
  "a",
  {
    href: "https://googe.com"
  },
  "ir a Google"
);*/
//const name = "gabish";
//const element = React.createElement("h1", {}, `hola soy ${name}`);
//const jsx = <h1>Holas soy {name}</h1>;

/*const jsx = (
  <div>
    <h1>Hola soy {name + " Ortega"}</h1>
  </div>
);*/

const container = document.getElementById("app");

//ReactDOM.render(_que_ , _donde_)
//ReactDOM.render(element, container);
//ReactDOM.render(jsx, container);
/*ReactDOM.render(
  <Badge
    firstname="Lilly"
    avatarUrl="https://s.gravatar.com/avatar/81093cc55c7768e60d3f6138098f6902?s=80"
    lastname="Ortega"
    jobTitle="FrontEnd Developer"
    twitter="elgabish"
  />,
  container
);*/

ReactDOM.render(<Badges />, container);
