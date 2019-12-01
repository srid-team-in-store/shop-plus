import ShopDetail from "../view/ShopDetail.html";
import "../style/shopDetail.less";
import {renderEventList} from "./lib/renderEventList";
import {renderBasicList} from "./lib/renderBaiscList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";

const mockData = require("./mockData/shopDetails");

const getData = function () {
    const id = location.hash.split("/").pop();
    for(const item of mockData) {
        if(+item.id === +id) {
            return item;
        }
    }
    return null;
};

const renderCommonNav = function (detail) {
    document.getElementById("back-btn-container").addEventListener("click", () => {
        window.history.go(-1);
    });
    document.getElementById("nav-title").innerText = detail.name;
};

const renderBasicSection = function (detail) {
    document.getElementById("shop-img-container").style.backgroundImage = `url("${detail.shopImg}")`;
    document.getElementById("shop-name").innerText = detail.name;
    document.getElementById("rate-img").src = detail.rateImg;
    document.getElementById("score").innerText = detail.score;
    document.getElementById("time").innerText = detail.time;
    document.getElementById("address").innerText = detail.address;
    document.getElementById("distance").innerText = detail.distance;
};

const renderMapSection = function (detail) {
    document.getElementById("map-container").style.backgroundImage = `url("${detail.mapEntranceImg}")`;
};

const renderRecommend = function (detail) {
    const recommendList = document.getElementById("recommend-list");
    renderProductBlockItemList(recommendList, detail.recommendList);
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = ShopDetail;
    const data = getData();
    renderCommonNav(data);
    renderBasicSection(data);
    renderEventList(document.getElementById("event-list"), data.events);
    renderBasicList(document.getElementById("category"), data.categories);
    renderMapSection(data);
    renderRecommend(data);
    const shopId = location.hash.substr(location.hash.lastIndexOf("/") + 1);
    document.getElementById("map-container").addEventListener("click", () => {
        window.location.hash = "/navigation?shopId=" + shopId;
    });
};

const shopDetail = {
    render,
};

export default shopDetail;
