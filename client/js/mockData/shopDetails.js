const costco = require("./shops/costco");
const target = require("./shops/target");
const marshalls = require("./shops/marshall");
const wholefoods = require("./shops/wholefoods");
const shops = [];
shops.push(costco);
shops.push(target);
shops.push(marshalls);
shops.push(wholefoods);

module.exports = shops;
