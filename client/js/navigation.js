import Map from "../view/Navigation.html";
import "../style/navigation.less";

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Map;

    document.getElementById("search-button").addEventListener("click", () => {
        const category = document.getElementById("category").value.toLowerCase();
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

    document.getElementById("map-back").addEventListener("click", () => {
        const shopId = location.hash.split("=")[1];
        window.location.hash = "/shop/" + shopId;
    });

    document.getElementById("map-close").addEventListener("click", () => {
        window.location.hash = "/";
    });

    document.getElementById("start-navigation").addEventListener("click", () => {
        const category = document.getElementById("category").value.toLowerCase();
        if(category.length > 0) {
            window.location.hash = "/ar?category=" + category;
        }
    });
};

const navigation = {
    render,
};

export default navigation;
