import SearchResult from "../view/SearchResult.html";
import "../style/searchResult.less";
import {renderShopList} from "./lib/renderShopList";
import {renderEventList} from "./lib/renderEventList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";


const renderSearchResult = function () {
    const _shopList = require("./mockData/shopList");
    const _eventList = require("./mockData/eventList");
    const _recommendProductList = require("./mockData/productList");
    const inputVal = location.hash.split("=")[1];
    const shopList = _shopList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    const eventList = _eventList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    const recommendProductList = _recommendProductList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    renderShopList(document.getElementById("shop-list"), shopList, true);
    renderEventList(document.getElementById("event-list"), eventList, true);
    renderProductBlockItemList(document.getElementById("product-list"), recommendProductList, true);
};

const renderCommonNav = function () {
    document.getElementById("back-btn-container").addEventListener("click", () => {
        window.history.go(-1);
    });
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = SearchResult;
    renderSearchResult();
    renderCommonNav();
};

const searchPage = {
    render,
};

export default searchPage;
