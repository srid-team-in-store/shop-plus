const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
let url = "mongodb://127.0.0.1/SHOP_PLUS";
if(process.env.MONGODB_URI) {
    url = process.env.MONGODB_URI;
}

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", async () => {
    console.log("Mongoose connection open to " + url);
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", async () => {
    console.log("Mongoose connection disconnected");
});

module.exports = mongoose;
