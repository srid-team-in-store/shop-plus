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
},{
    id: "tab-event",
    text: "Event",
    sectionId: "section-event"
},{
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
        for(const config of configList){
            document.getElementById(config.id).classList.remove("active");
        }
    };
    pageHome.addEventListener("scroll",() => {
        resetNavBarStyle();
        for(let i = 0; i < configList.length; i++){
            const sectionOffsetTop = document.getElementById(configList[i].sectionId).offsetTop;
            if(pageHome.scrollTop < sectionOffsetTop + 200){
                document.getElementById(configList[i].id).classList.add("active");
                break;
            }
            if(i === configList.length - 1){
                document.getElementById(configList[i].id).classList.add("active");
            }
        }
    });
    for(const config of configList){
        document.getElementById(config.id).addEventListener("click", () => {
            const sectionOffsetTop = document.getElementById(config.sectionId).offsetTop;
            pageHome.scrollTop = sectionOffsetTop - 180 > 0 ? sectionOffsetTop - 180 : 0;
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

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Home;
    renderShopList(document.getElementById("shop-list"), shopList);
    renderEventList(document.getElementById("event-list"), eventList);
    renderProductBlockItemList(document.getElementById("product-list"), recommendProductList);
    addScrollEventListener();
    setNavBar(navbarConfig);
};

const home = {
    render,
};

export default home;
