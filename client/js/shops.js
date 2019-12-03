import Shop from "../view/Shops.html";
import "../style/shops.less";
import { renderShopList } from "./lib/renderShopList";

const shopList = require("./mockData/shopList");

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Shop;
    renderShopList(document.getElementById("shop-list"), shopList);

    document.getElementById("search-icon").addEventListener("click", () => {
        const searchInput = document.getElementById("search-input").value;
        if(searchInput.length > 0) {
            window.location.hash = "/searchResult?searchInput=" + searchInput;
        }
    });
};

const shops = {
    render,
};

export default shops;
