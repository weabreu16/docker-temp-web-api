const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();

app.set("port", process.env.PORT || 3000);

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log("App running on port", app.get("port"))
});