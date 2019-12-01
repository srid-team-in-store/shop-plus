const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const http = require("http").createServer(app);
const port = process.env.PORT || 80;
const bodyParser = require("body-parser");
require("./lib/connectdb");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: true
}));
app.use("/app", express.static(path.resolve(__dirname, "../dist")));

app.use("/style-guide", express.static(path.resolve(__dirname, "../StyleGuide")));


app.get("/heartbeat", async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Hello Shop Plus!"
    });
});

http.listen(port, () => {
    console.log(`Express server start, listening on port:${port} ...`);
});
