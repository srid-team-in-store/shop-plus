const recommendList = require("../common/recommendList");

module.exports = {
    shopImg: "https://i.imgur.com/PAFI6yR.png",
    name: "Costco Wholesale",
    score: 4.4,
    rateImg: "https://i.imgur.com/t57LkuA.png",
    time: "9:00 am - 9:00 pm",
    address: "1000N Rengstorff Ave",
    distance: "1.1mile",
    id: 1,
    events: [{
        img: "https://i.imgur.com/WyNtf5l.png",
        name: "Christmas Promotion Event",
        subTitle: "12/1 - 12/30 · All Costco Store",
        link: "",
        id: 1
    }, {
        img: "https://i.imgur.com/cvzKoFY.png",
        name: "New Member Savings",
        subTitle: "10/30 - 11/24 · All Costco Store",
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
