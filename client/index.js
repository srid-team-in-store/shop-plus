import Navigo from "navigo";
import "./style/index.less";
import initRouter from "./js/lib/initRouter";
import Error from "./view/Error.html";
import home from "./js/home";
import productDetail from "./js/productDetail";
import shopDetail from  "./js/shopDetail";
import BottomTab from "./components/bottomTab";

const app = document.getElementById("app");
const router = new Navigo(null, true, "#");
initRouter();
window.state = {};
BottomTab.initBottomTab();

router.on("/", () => {
    home.render();
}).resolve();

router.on("/product/:id", () => {
    productDetail.render();
}).resolve();

router.on("/shop/:id",() => {
    shopDetail.render();
});

router.notFound(() => {
    app.innerHTML = Error;
}).resolve();
