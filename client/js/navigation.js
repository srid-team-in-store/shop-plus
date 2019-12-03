import Map from "../view/Navigation.html";
import "../style/navigation.less";

const renderMap = function () {
    document.getElementById("search-button").addEventListener("click", () => {
        const category = document.getElementById("category").value.toLowerCase();
        document.getElementById("start-navigation-container").style.visibility = "visible";
        switch (category) {
        case "kitchen":
            document.getElementById("imgId").src = "https://i.imgur.com/WLWrezF.png";
            break;
        case "fruit":
            document.getElementById("imgId").src = "https://i.imgur.com/7lOXdof.png";
            break;
        case "drink":
            document.getElementById("imgId").src = "https://i.imgur.com/AqR34f0.png";
            break;
        case "crafts":
            document.getElementById("imgId").src = "https://i.imgur.com/WAmpYtq.png";
            break;
        case "snacks":
            document.getElementById("imgId").src = "https://i.imgur.com/XPdSWHd.png";
            break;
        default:
        }
    });
};

const renderNavigation = function () {
    document.getElementById("start-navigation").addEventListener("click", () => {
        const category = document.getElementById("category").value.toLowerCase();
        if(category.length > 0) {
            window.location.hash = "/ar?category=" + category;
        }
    });
};

const goBack = function () {
    document.getElementById("map-back").addEventListener("click", () => {
        const shopId = location.hash.split("=")[1];
        window.location.hash = "/shop/" + shopId;
    });
};

const close = function () {
    document.getElementById("map-close").addEventListener("click", () => {
        window.location.hash = "/";
    });
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Map;

    renderMap();
    goBack();
    close();
    renderNavigation();
};

const navigation = {
    render,
};

export default navigation;
