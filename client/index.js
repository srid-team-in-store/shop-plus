import Navigo from "navigo";
import "./style/index.less";
import initRouter from "./js/lib/initRouter";
import Error from "./view/Error.html";
import home from "./js/home";
import productDetail from "./js/productDetail";
import shopDetail from "./js/shopDetail";
import productVideo from "./js/productVideo";
import member from "./js/member";
import shops from "./js/shops";
import BottomTab from "./components/bottomTab";
import navigation from "./js/navigation";
import ar from "./js/ar";
import scanDetail from "./js/scanDetail";

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

router.on("/shop/:id", () => {
    shopDetail.render();
});

router.on("/video/:id", () => {
    productVideo.render();
});

router.on("/me", () => {
    member.render();
});

router.on("/shops", () => {
    shops.render();
});

router.on("/navigation", () => {
    navigation.render();
}).resolve();

router.on("/ar", () => {
    ar.render();
}).resolve();

router.on("/scan_detail", () => {
    scanDetail.render();
}).resolve();

router.notFound(() => {
    app.innerHTML = Error;
}).resolve();
