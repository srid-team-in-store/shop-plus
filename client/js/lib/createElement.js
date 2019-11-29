const createSingleElement = function (tagName, className, id) {
    const ele = document.createElement(tagName);
    if(className) {
        ele.className = className;
    }
    if(id) {
        ele.id = id;
    }
    return ele;
};

export default createSingleElement;
