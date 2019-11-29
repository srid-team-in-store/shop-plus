import Home from "../view/Home.html";
import "../style/home.less";
import {renderShopList} from "./lib/renderShopList";
import {renderEventList} from "./lib/renderEventList";

const _debounce = require("lodash/debounce");

const shopList = require("./mockData/shopList");
const eventList = require("./mockData/eventList");

const addScrollEventListener = function () {
    const pageHome = document.getElementById("page-home");
    const handleScroll = _debounce(() => {
        if(pageHome.scrollTop >= 56) {
            document.getElementById("page-title").style.display = "none";
            document.getElementById("nav-bar-home").classList.add("fixed");
            document.getElementById("home-content").style.paddingTop = "178px";
        } else {
            document.getElementById("page-title").style.display = "block";
            document.getElementById("nav-bar-home").classList.remove("fixed");
            document.getElementById("home-content").style.paddingTop = "0";
        }
    }, 1);
    pageHome.addEventListener("scroll", handleScroll);
};

const addNavTabEventListener = function (){
    const pageHome = document.getElementById("page-home");
    document.getElementById("tab-shop").addEventListener("click",() => {
        console.log(pageHome.scrollTop);
        pageHome.scrollTop = 0;
    });
    document.getElementById("tab-event").addEventListener("click",() => {
        console.log(pageHome.scrollTop);
        pageHome.scrollTop = 600;
    });
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Home;
    renderShopList(document.getElementById("shop-list"), shopList);
    renderEventList(document.getElementById("event-list"), eventList);
    addScrollEventListener();
    addNavTabEventListener();
};

const home = {
    render,
};

export default home;
