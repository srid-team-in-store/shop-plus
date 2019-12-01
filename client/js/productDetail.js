import ProductDetail from "../view/ProductDetail.html";
import "../style/productDetail.less";
import createSingleElement from "./lib/createElement";
import {renderReviewList} from "./lib/renderReviewList";
import {renderProductBlockItemList} from "./lib/renderProductBlockList";

const mockProducts = require("./mockData/productDetails");

const getData = function () {
    const productID = location.hash.split("/").pop();
    for(const item of mockProducts){
        if(+item.id === +productID){
            return item;
        }
    }
    return null;
};

const renderCommonNav = function (detail) {
    document.getElementById("back-btn-container").addEventListener("click",() => {
        window.history.go(-1);
    });
    document.getElementById("close-btn-container").addEventListener("click",() => {
        window.location.hash = "/";
    });
    document.getElementById("nav-title").innerText = detail.name;
};

const renderBasicSection = function(detail){
    const img = createSingleElement("img","product-img");
    img.src = detail.img;
    const imgContainer = document.getElementById("product-img-container");
    imgContainer.appendChild(img);
    document.getElementById("product-name").innerText = detail.name;
    document.getElementById("product-desc").innerText = detail.desc;
    document.getElementById("price").innerText = detail.price;
    document.getElementById("rate-img").src = detail.rateImg;
    document.getElementById("rate-score").innerText = detail.score;
    document.getElementById("rate-count").innerText = detail.rates;
};

const renderJourneySection = function(detail){
    if(!(detail.journey && detail.journey.length > 0)){
        document.getElementById("section-journey").style.display = "none";
    } else {
        document.getElementById("invisible-video-entry").addEventListener("click",() => {
            window.location.hash = `/video/${detail.id}`;
        });
    }
};

const renderReviews = function (detail) {
    const reviewList = document.getElementById("review-list");
    renderReviewList(reviewList,detail.reviews);
};

const renderRecommend = function (detail) {
    const recommendList = document.getElementById("recommend-list");
    renderProductBlockItemList(recommendList,detail.recommendList);
};

const render = function () {
    const productDetail = getData();
    const app = document.getElementById("app");
    if(productDetail) {
        app.innerHTML = ProductDetail;
        const pageProductDetail = document.getElementById("page-product-detail");
        pageProductDetail.scrollTop = 0;
        renderCommonNav(productDetail);
        renderBasicSection(productDetail);
        renderJourneySection(productDetail);
        renderReviews(productDetail);
        renderRecommend(productDetail);
    }
};

const productDetail = {
    render,
};

export default productDetail;
