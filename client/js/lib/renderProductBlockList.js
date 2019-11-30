import createSingleElement from "./createElement";
import "../../style/productBlockItem.less";

const buildSingleProductBlockItem = function (product) {
    const container = createSingleElement("div", "product-block-item");
    if(product.id) {
        container.addEventListener("click", () => {
            window.location.hash = `/product/${product.id}`;
        });
    }
    const imgContainer = createSingleElement("div", "img-container");
    const img = createSingleElement("img", "product-img");
    img.src = product.img;
    imgContainer.appendChild(img);

    const row1 = createSingleElement("div", "row");
    const name = createSingleElement("div", "name");
    name.innerText = product.name;
    row1.appendChild(name);

    const row2 = createSingleElement("div", "row rate-row");
    const rateImg = createSingleElement("img", "rate-img");
    rateImg.src = product.rateImg;
    const score = createSingleElement("div", "score");
    score.innerText = product.score;
    row2.appendChild(rateImg);
    row2.appendChild(score);

    const row3 = createSingleElement("div", "row price-row");
    const price = createSingleElement("div","price");
    row3.appendChild(price);
    price.innerText = product.price;
    if(product.originPrice){
        const originPrice = createSingleElement("div","origin-price");
        originPrice.innerText = product.originPrice;
        row3.appendChild(originPrice);
    }

    container.appendChild(imgContainer);
    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
    if(product.shopName) {
        const row4 = createSingleElement("div", "row shop-row");
        const shopName = createSingleElement("div", "shop-name");
        shopName.innerText = product.shopName;
        row4.appendChild(shopName);
        container.appendChild(row4);
    }
    return container;
};

const buildProductBlockItemList = function (productList) {
    return productList.map((item) => buildSingleProductBlockItem(item));
};

const renderProductBlockItemList = function (dom, productList) {
    for(const productDom of buildProductBlockItemList(productList)) {
        dom.appendChild(productDom);
    }
};

export {renderProductBlockItemList, buildProductBlockItemList, buildSingleProductBlockItem};
