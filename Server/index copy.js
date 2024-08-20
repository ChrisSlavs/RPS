const config = require("./config/metadata.json");
const serverPort = config.server_port;

// express init
const express = require("express");
const app = express();

// database
const db = require("./models");

// routers
const usersRouter = require("./routes/Users");
const linesRouter = require("./routes/Lines");
app.use("/lines", linesRouter);
app.use("/users", usersRouter);


db.sequelize.sync().then(() => {
    app.listen(serverPort, () => {
        console.log("Server running on port " + serverPort);
    });
});



