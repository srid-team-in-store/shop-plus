import Map from "../view/Map.html";
import "../style/map.less";

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
        window.history.go(-1);
    });

    document.getElementById("start-navigation").addEventListener("click", () => {
        const category = document.getElementById("category").value.toLowerCase();
        if(category.length > 0) {
            window.location.hash = "/ar?category=" + category;
        }
    });
};

const map = {
    render,
};

export default map;
