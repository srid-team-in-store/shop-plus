import ScanDetail from "../view/ScanDetail.html";
import "../style/scanDetail.less";

const renderCommonNav = function () {
    document.getElementById("back-btn-container").addEventListener("click", () => {
        window.history.go(-1);
    });
    document.getElementById("nav-title").innerText = "Back";
};

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = ScanDetail;
    renderCommonNav();
    setTimeout(() => {
        window.location.replace("#/product/1000" + Math.ceil(Math.random() * 4));
    }, 2000);
};

const scanDetail = {
    render,
};

export default scanDetail;
