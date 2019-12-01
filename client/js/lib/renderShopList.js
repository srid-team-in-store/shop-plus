import createSingleElement from "./createElement";
import "../../style/shopListItem.less";

const buildLeft = function (shop) {
    const left = createSingleElement("div","left");
    const img = document.createElement("img");
    img.src = shop.imgSrc;
    left.appendChild(img);
    return left;
};

const buildRight = function (shop) {
    const right = createSingleElement("div","right");
    const row1 = createSingleElement("div", "row");
    const title = createSingleElement("h3", "title");
    title.innerText = shop.name;
    row1.appendChild(title);

    const row2 = createSingleElement("div", "row");
    const rateImg = createSingleElement("img", "rate-img");
    rateImg.src = shop.rateImg;
    const score = createSingleElement("div", "score");
    score.innerText = shop.score;
    row2.appendChild(rateImg);
    row2.appendChild(score);

    const row3 = createSingleElement("div", "row");
    const time = createSingleElement("div", "time");
    time.innerText = shop.time;
    row3.appendChild(time);

    const row4 = createSingleElement("div", "row space-between");
    const address = createSingleElement("div", "address");
    address.innerText = shop.address;
    const distance = createSingleElement("div", "distance");
    distance.innerText = shop.distance;
    row4.appendChild(address);
    row4.appendChild(distance);

    right.appendChild(row1);
    right.appendChild(row2);
    right.appendChild(row3);
    right.appendChild(row4);
    return right;
};

const buildSingleShopItem = function (shop) {
    const container = createSingleElement("div","shop-list-item");
    if(shop.id) {
        container.addEventListener("click", () => {
            window.location.hash = `/shop/${shop.id}`;
        });
    }
    const left = buildLeft(shop);
    const right = buildRight(shop);
    container.appendChild(left);
    container.appendChild(right);
    return container;
};

const buildShopList = function (shopList) {
    return shopList.map((item) => buildSingleShopItem(item));
};

const renderShopList = function (dom, shopList) {
    for(const shopDom of buildShopList(shopList)) {
        dom.appendChild(shopDom);
    }
};

export {renderShopList, buildShopList, buildSingleShopItem};
