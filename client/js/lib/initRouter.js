const updateUrl = () => {
    if(window.location.hash === "" ||
        window.location.href.split("#")[1] === "" ||
        window.location.href.indexOf("#") === -1) {
        window.location.hash = "/";
    }
};

const initRouter = () => {
    window.addEventListener("load", updateUrl);
    window.addEventListener("hashchange", updateUrl);
};

export default initRouter;
