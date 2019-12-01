import Me from "../view/Me.html";

const render = function () {
    const app = document.getElementById("app");
    app.innerHTML = Me;
};

const member = {
    render,
};

export default member;