import Shop from "../view/Shops.html";
import "../style/shops.less";
import { renderShopList } from "./lib/renderShopList";

const shopList = require("./mockData/shopList");



const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Shop;
    renderShopList(document.getElementById("shop-list"), shopList);
};

const shops = {
    render,
};

export default shops;
