import "./styles.css";
import "./bryan.css"
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";

console.log(greeting);

console.log("wuuuiiii")


   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);