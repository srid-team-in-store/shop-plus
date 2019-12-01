const recommendList = require("../common/recommendList");

module.exports = {
    shopImg: "https://i.imgur.com/FATXAyG.png",
    name: "Target",
    score: 4.6,
    rateImg: "https://i.imgur.com/t57LkuA.png",
    time: "8:00 am - 11:00 pm",
    address: "555 Showers Dr",
    distance: "500m",
    id: 2,
    events: [{
        img: "https://i.imgur.com/Dh9GJJK.png",
        name: "Target Red Card",
        subTitle: "11/1 - 12/30 · Target",
        link: "",
        id: 2
    }],
    categories: [{
        name: "Drink",
        id: 1,
        sub: [{
            name: "Milk",
            id: 10001
        }, {
            name: "Water",
            id: 10002
        }, {
            name: "Juice",
            id: 10003
        }, {
            name: "Energy Drinks",
            id: 10004
        }, {
            name: "Soda & Soft Drink",
            id: 10005
        }, {
            name: "Coffee",
            id: 10006
        }]
    }, {
        name: "Appliances",
        id: 2,
        sub: [{
            name: "Cooking Appliances",
            id: 20001
        }, {
            name: "Cooling, Heating",
            id: 20002
        }, {
            name: "Refrigerators",
            id: 20003
        }, {
            name: "Ranges",
            id: 20004
        }, {
            name: "Range Hoods",
            id: 20005
        }]
    }, {
        name: "Baby",
        id: 3
    }, {
        name: "Beauty",
        id: 4
    }, {
        name: "Clothing,Luggage & Handbags",
        id: 5
    }, {
        name: "Computers",
        id: 6
    }, {
        name: "Electronics",
        id: 7
    }, {
        name: "Food",
        id: 8
    }],
    mapEntranceImg: "https://i.imgur.com/xKLvH8d.png",
    recommendList: recommendList
};
