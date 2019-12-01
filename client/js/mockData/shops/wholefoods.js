const recommendList = require("../common/recommendList");

module.exports = {
    shopImg: "https://i.imgur.com/uuFeSxO.png",
    name: "Wholefoods",
    score: 4.6,
    rateImg: "https://i.imgur.com/t57LkuA.png",
    time: "10:00 am - 10:00 pm",
    address: "1000 Mission Street",
    distance: "3mile",
    id: 4,
    events: [{
        img: "https://i.imgur.com/XJgLEqq.png",
        name: "New Store Open!",
        subTitle: "11/1 - 12/30 · Wholefoods",
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
