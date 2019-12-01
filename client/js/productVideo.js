import ProductVideo from "../view/ProductVideo.html";
import "../style/productVideo.less";

const mockVideos = require("./mockData/productVideo");

const getData = function () {
    const videoID = location.hash.split("/").pop();
    for(const item of mockVideos){
        if(+item.id === +videoID){
            return item;
        }
    }
    return null;
};

const renderCommonNav = function (detail) {
    document.getElementById("back-btn-container").addEventListener("click",() => {
        window.history.go(-1);
    });
    document.getElementById("nav-title").innerText = "Produce";
};

const renderBasicSection = function(detail){
    document.getElementById("video-name").innerText = detail.name;
    document.getElementById("video-location").innerText = detail.location;
    document.getElementById("video-img").src = detail.videoImg;
    document.getElementById("live-video-img").src = detail.liveVideoImg;
};

const render = function () {
    const productVideo = getData();
    const app = document.getElementById("app");
    if(productVideo) {
        app.innerHTML = ProductVideo;
        const pageProductVideo = document.getElementById("page-product-video");
        pageProductVideo.scrollTop = 0;
        renderCommonNav(productVideo);
        renderBasicSection(productVideo);
    }
};

const productVideo = {
    render,
};

export default productVideo;
