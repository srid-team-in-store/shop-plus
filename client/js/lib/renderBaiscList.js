import createSingleElement from "./createElement";
import "../../style/category.less";

const grayArrowImg = "https://i.imgur.com/z9zRluf.png";

const buildSingleListItem = function (item) {
    const container = createSingleElement("div", "basic-list-item");
    const name = createSingleElement("div","name");
    name.innerText = item.name;
    const grayArrow = createSingleElement("img","gray-arrow");
    grayArrow.src = grayArrowImg;
    container.appendChild(name);
    container.appendChild(grayArrow);
    return container;
};

const buildBasicList = function (list) {
    const listDoms = list.map((item) => buildSingleListItem(item));
    const res = [];
    for(const item of listDoms){
        res.push(item);
        res.push(createSingleElement("div","right-thin-line"));
    }
    return res;
};

const renderBasicList = function (dom, list) {
    for(const item of buildBasicList(list)) {
        dom.appendChild(item);
    }
};

export {renderBasicList, buildBasicList, buildSingleListItem};
