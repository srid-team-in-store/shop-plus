import Home from "../view/Home.html";
import "../style/home.less";
import {renderShopList} from "./lib/renderShopList";
import {renderEventList} from "./lib/renderEventList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";

const _debounce = require("lodash/debounce");

const shopList = require("./mockData/shopList");
const eventList = require("./mockData/eventList");
const recommendProductList = require("./mockData/productList");

const swithNavBarFixed = function (fixed) {
    const pageTitle = document.getElementById("page-title");
    const navbar = document.getElementById("nav-bar-home");
    const homeContent = document.getElementById("home-content");
    if(fixed) {
        pageTitle.style.display = "none";
        navbar.classList.add("fixed");
        homeContent.style.paddingTop = "178px";
    } else {
        pageTitle.style.display = "block";
        navbar.classList.remove("fixed");
        homeContent.style.paddingTop = "0";
    }
};

const setNavbar = function () {
    const pageHome = document.getElementById("page-home");
    const tabShop = document.getElementById("tab-shop");
    const tabEvent = document.getElementById("tab-event");
    const tabRecommend = document.getElementById("tab-recommend");
    const resetNavbar = function () {
        tabShop.classList.remove("active");
        tabRecommend.classList.remove("active");
        tabEvent.classList.remove("active");
    };
    resetNavbar();
    if(pageHome.scrollTop <= 640) {
        tabShop.classList.add("active");
    } else if(pageHome.scrollTop > 640 && pageHome.scrollTop <= 1220){
        tabEvent.classList.add("active");
    } else {
        tabRecommend.classList.add("active");
    }
};

const addScrollEventListener = function () {
    const pageHome = document.getElementById("page-home");
    const handleScroll = _debounce(() => {
        if(pageHome.scrollTop >= 56) {
            swithNavBarFixed(true);
        } else {
            swithNavBarFixed(false);
        }
        setNavbar();
    }, 1);
    pageHome.addEventListener("scroll", handleScroll);
};

const addNavTabEventListener = function () {
    const pageHome = document.getElementById("page-home");
    document.getElementById("tab-shop").addEventListener("click", () => {
        pageHome.scrollTop = 0;
    });
    document.getElementById("tab-event").addEventListener("click", () => {
        pageHome.scrollTop = 660;
    });
    document.getElementById("tab-recommend").addEventListener("click", () => {
        pageHome.scrollTop = 1240;
    });
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Home;
    renderShopList(document.getElementById("shop-list"), shopList);
    renderEventList(document.getElementById("event-list"), eventList);
    renderProductBlockItemList(document.getElementById("product-list"), recommendProductList);
    addScrollEventListener();
    addNavTabEventListener();
};

const home = {
    render,
};

export default home;
