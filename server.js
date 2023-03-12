const express = require("express");
const app = express();

app.use(express.static('public'));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get("/api/random", function (req, res) {

    let rand = getRandomInt(10);

    res.json(rand);
})

app.listen(3000, function () {
    console.log("The app is running at port 3000")
});