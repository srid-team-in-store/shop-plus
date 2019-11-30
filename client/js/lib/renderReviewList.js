import createSingleElement from "./createElement";
import "../../style/reviewListItem.less";

const buildSingleReviewItem = function (review) {
    const container = createSingleElement("div","review-list-item");
    const row = createSingleElement("div","row");
    const username = createSingleElement("div","name");
    username.innerText = review.username;
    const time = createSingleElement("div","time");
    time.innerText = review.time;
    const rateImg = createSingleElement("img","rate-img");
    rateImg.src = review.rateImg;
    row.appendChild(username);
    row.appendChild(time);
    row.appendChild(rateImg);

    const content = createSingleElement("div","review-content");
    content.innerText = review.content;

    container.appendChild(row);
    container.appendChild(content);
    return container;
};

const buildReviewList = function (reviewList) {
    const reviewListDoms = reviewList.map((item) => buildSingleReviewItem(item));
    const res = [];
    for(const item of reviewListDoms){
        res.push(item);
        res.push(createSingleElement("div","right-thin-line"));
    }
    res.pop();
    return res;
};

const renderReviewList = function (dom, reviewList) {
    for(const shopDom of buildReviewList(reviewList)) {
        dom.appendChild(shopDom);
    }
};

export {renderReviewList, buildReviewList, buildSingleReviewItem};
