import Cart from "../view/Cart.html";
import "../style/cart.less";
import {renderCartItemList} from "./lib/renderCartItemList";

const cartItemList = require("./mockData/cartItemList");


const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Cart;
    renderCartItemList(document.getElementById("cart-item-list"), cartItemList);
};

const cart = {
    render,
};

export default cart;