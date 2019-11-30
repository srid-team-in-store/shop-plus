import ProductDetail from "../view/ProductDetail.html";

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = ProductDetail;
    console.log("");
};

const productDetail = {
    render,
};

export default productDetail;
