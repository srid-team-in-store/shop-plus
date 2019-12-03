import SearchPage from "../view/SearchPage.html";
import "../style/searchPage.less";
import {renderEventList} from "./lib/renderEventList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";

const mockData = require("./mockData/shopDetails");

const getData = function () {
    const id = location.hash.split("=")[1];
    for(const item of mockData) {
        if(+item.id === +id) {
            return item;
        }
    }
    return null;
};

const renderBasicSection = function (detail) {
    document.getElementById("shop-name").innerText = "Search in " + detail.name;
};

const renderCommonNav = function () {
    document.getElementById("back-btn-container").addEventListener("click", () => {
        const shopId = location.hash.split("=")[1];
        window.location.hash = "/shop/" + shopId;
    });
};

const addSearchListener = () => {
    document.getElementById("search-icon").addEventListener("click", () => {
        const searchInput = document.getElementById("search-input").value;
        if(searchInput.length > 0) {
            window.location.hash = "/searchResult?searchInput=" + searchInput;
        }
    });
};


const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = SearchPage;
    const data = getData();
    renderBasicSection(data);
    renderEventList(document.getElementById("event-list"), data.events);
    renderProductBlockItemList(document.getElementById("product-list"), data.recommendList);
    renderCommonNav();
    addSearchListener();
};

const searchPage = {
    render,
};

export default searchPage;
