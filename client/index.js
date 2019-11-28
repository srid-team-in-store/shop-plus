import Navigo from "navigo";
import initRouter from "./js/lib/initRouter";
import Home from "./view/Home.html";
import Error from "./view/Error.html";

const app = document.getElementById("app");
const router = new Navigo(null, true, "#");
initRouter();
window.state = {};

router.on("/", () => {
    app.innerHTML = Home;
}).resolve();

router.notFound(() => {
    app.innerHTML = Error;
}).resolve();
