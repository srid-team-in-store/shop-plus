import Navigo from "navigo";
import "./style/index.less";
import initRouter from "./js/lib/initRouter";
import Error from "./view/Error.html";
import home from "./js/home";

const app = document.getElementById("app");
const router = new Navigo(null, true, "#");
initRouter();
window.state = {};

router.on("/", () => {
    home.render();
}).resolve();

router.notFound(() => {
    app.innerHTML = Error;
}).resolve();
