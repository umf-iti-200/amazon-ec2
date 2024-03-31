const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get("/api/random", function (req, res) {

    let rand = getRandomInt(10);

    res.json(rand);
})

app.listen(PORT, function () {
    console.log("The app is running at port " + PORT)
});