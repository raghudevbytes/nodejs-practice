let express = require("express")
let morgan = require("morgan");

const toureRouter = require("./toureRoute");

const app = express();

app.use(morgan("dev"))
app.use(express.json());

app.use("/api/v1/tours",toureRouter);

module.exports = app;