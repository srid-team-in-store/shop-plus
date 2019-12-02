import createSingleElement from "./createElement";
// import "../../style/shopListItem.less";

const buildLeft = function (shop) {
    const left = createSingleElement("div", "left");
    const img = document.createElement("img");
    img.src = shop.imgSrc;
    left.appendChild(img);
    return left;
};

const buildRight = function (item) {
    const right = createSingleElement("div", "right");
    const row1 = createSingleElement("div", "row");
    const title = createSingleElement("h3", "title");
    title.innerText = item.name;
    row1.appendChild(title);

    const row2 = createSingleElement("div", "row");
    const rateImg = createSingleElement("img", "rate-img");
    rateImg.src = item.rateImg;
    const score = createSingleElement("div", "score");
    score.innerText = item.score;
    row2.appendChild(rateImg);
    row2.appendChild(score);

    const row3 = createSingleElement("div", "row");
    const time = createSingleElement("div", "price");
    time.innerText = item.price;
    row3.appendChild(time);

    right.appendChild(row1);
    right.appendChild(row2);
    right.appendChild(row3);
    return right;
};


const buildSingleCartItem = (item) => {
    const container = createSingleElement("div", "cart-list-item");
    const left = buildLeft(item);
    const right = buildRight(item);
    container.appendChild(left);
    container.appendChild(right);
    return container;
};


const buildCartItemList = function (itemList) {
    return itemList.map((item) => buildSingleCartItem(item));
};

const renderCartItemList = function (dom, shopList, replace) {
    if(replace) {
        dom.innerHTML = "";
    }
    for(const shopDom of buildCartItemList(shopList)) {
        dom.appendChild(shopDom);
    }
};

export {renderCartItemList};
