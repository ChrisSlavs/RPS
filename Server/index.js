const path = require("node:path")

const config = require("./config/metadata.json");
const serverPort = config.server_port;

// express init
const express = require("express");
const app = express();

// database
const db = require("./models");

// routers
const routeMaker = require("./scripts/routeMaker");
const routes = routeMaker.makeRoutes(path.resolve("./routes"));
for (const [key, val] of Object.entries(routes)) {
    app.use(val.at(0), val.at(1));
}

db.sequelize.sync().then(() => {
    app.listen(serverPort, () => {
        console.log("Server running on port " + serverPort);
    });
});



