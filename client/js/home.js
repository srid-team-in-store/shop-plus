import Home from "../view/Home.html";
import "../style/home.less";
import {renderShopList} from "./lib/renderShopList";
import {renderEventList} from "./lib/renderEventList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";

const _debounce = require("lodash/debounce");

const shopList = require("./mockData/shopList");
const eventList = require("./mockData/eventList");
const recommendProductList = require("./mockData/productList");

const navbarConfig = [{
    id: "tab-shop",
    text: "Shop",
    sectionId: "section-shop"
}, {
    id: "tab-event",
    text: "Event",
    sectionId: "section-event"
}, {
    id: "tab-recommend",
    text: "Recommend",
    sectionId: "section-product"
}];

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

const setNavBar = function (configList) {
    const pageHome = document.getElementById("page-home");
    const resetNavBarStyle = function () {
        for(const config of configList) {
            document.getElementById(config.id).classList.remove("active");
        }
    };
    pageHome.addEventListener("scroll", () => {
        resetNavBarStyle();
        for(let i = 0; i < configList.length; i++) {
            const sectionOffsetTop = document.getElementById(configList[i].sectionId).offsetTop;
            if(pageHome.scrollTop < sectionOffsetTop + 200) {
                document.getElementById(configList[i].id).classList.add("active");
                break;
            }
            if(i === configList.length - 1) {
                document.getElementById(configList[i].id).classList.add("active");
            }
        }
    });
    for(const config of configList) {
        document.getElementById(config.id).addEventListener("click", () => {
            const sectionOffsetTop = document.getElementById(config.sectionId).offsetTop;
            pageHome.scrollTop = Math.max(sectionOffsetTop - 180, 0);
        });
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
    }, 1);
    pageHome.addEventListener("scroll", handleScroll);
};

const addQRcodeListener = () => {
    document.getElementById("qrcode-icon").addEventListener("click", () => {
        window.location.href = "#/scan_detail";
    });
};

const updateData = () => {
    const _shopList = require("./mockData/shopList");
    const _eventList = require("./mockData/eventList");
    const _recommendProductList = require("./mockData/productList");
    const inputVal = document.getElementById("search-input").value;
    const shopList = _shopList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    const eventList = _eventList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    const recommendProductList = _recommendProductList.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase()));
    renderShopList(document.getElementById("shop-list"), shopList, true);
    renderEventList(document.getElementById("event-list"), eventList, true);
    renderProductBlockItemList(document.getElementById("product-list"), recommendProductList, true);
};
const addSearchListener = () => {
    document.getElementById("search-icon").addEventListener("click", updateData);
    document.getElementById("search-input").addEventListener("input", updateData);
};
const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Home;
    renderShopList(document.getElementById("shop-list"), shopList);
    renderEventList(document.getElementById("event-list"), eventList);
    renderProductBlockItemList(document.getElementById("product-list"), recommendProductList);
    addScrollEventListener();
    setNavBar(navbarConfig);
    addQRcodeListener();
    addSearchListener();
};

const home = {
    render,
};

export default home;
