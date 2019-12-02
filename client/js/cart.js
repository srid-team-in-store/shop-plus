import Cart from "../view/Cart.html";
import "../style/cart.less";

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Cart;
};

const cart = {
    render,
};

export default cart;
