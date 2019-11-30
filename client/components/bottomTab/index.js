import View from "./view.html";
import "./style.less";

const hashToTabItem = {
    "#/": "tab-item-home",
    "#/shops": "tab-item-shops",
    "#/me": "tab-item-me",
    "#/cart": "tab-item-cart"
};

const tabItemToHash = {
    "tab-item-home": "#/",
    "tab-item-cart": "#/cart",
    "tab-item-me": "#/me",
    "tab-item-shops": "#/shops"
};

const mountNode = () => {
    const body = document.body;
    const mountDom = document.createElement("div");
    mountDom.id = "bottom-tab-node";
    mountDom.style.visibility = "hidden";
    mountDom.innerHTML = View;
    body.appendChild(mountDom);
};

const updateBottomTab = () => {
    const mountDom = document.getElementById("bottom-tab-node");
    if(hashToTabItem[window.location.hash]) {
        mountDom.style.visibility = "visible";
        for(const domId of Object.keys(tabItemToHash)) {
            document.getElementById(domId).classList.remove("current");
        }
        document.getElementById(hashToTabItem[window.location.hash]).classList.add("current");
    } else {
        mountDom.style.visibility = "hidden";
    }
};

const hideBottomTab = () => {
    const bottomTabDom = document.getElementById("bottom-tab");
    bottomTabDom.style.visibility = "hidden";
};

const showBottomTab = () => {
    const bottomTabDom = document.getElementById("bottom-tab");
    bottomTabDom.style.visibility = "visible";
};

const addNavigationListener = () => {
    for(const item of Object.entries(tabItemToHash)) {
        document.getElementById(item[0]).addEventListener("click", () => {
            window.location.hash = item[1];
        });
    }
};

const initBottomTab = () => {
    mountNode();
    updateBottomTab();
    window.addEventListener("hashchange", updateBottomTab);
    addNavigationListener();
};

const BottomTab = {
    hideBottomTab,
    showBottomTab,
    initBottomTab
};

export default BottomTab;
