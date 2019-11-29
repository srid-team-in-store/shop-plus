import createSingleElement from "./createElement";
import "../../style/eventListItem.less";

const buildSingleEventItem = function (event) {
    const container = createSingleElement("div","event-list-item");
    const imgContainer = createSingleElement("div","event-img-container");
    const img = createSingleElement("img","event-img");
    img.src = event.img;
    imgContainer.appendChild(img);

    const eventName = createSingleElement("h3","event-name");
    eventName.innerText = event.name;

    const subTitle = createSingleElement("div","sub-title");
    subTitle.innerText = event.subTitle;
    container.appendChild(imgContainer);
    container.appendChild(eventName);
    container.appendChild(subTitle);
    return container;
};

const buildEventList = function (eventList) {
    return eventList.map((item) => buildSingleEventItem(item));
};

const renderEventList = function (dom, eventList) {
    for(const item of buildEventList(eventList)) {
        dom.appendChild(item);
    }
};

export {renderEventList, buildEventList, buildSingleEventItem};
