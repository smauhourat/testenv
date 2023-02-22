// Add Express
const express = require("express");
require('dotenv').config();

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel" + process.env['MESSAGE_STYLE']);
});

app.route('/json')
    .get(function (req, res) {
        const mySecret = process.env['MESSAGE_STYLE']
        let msg = "";
        if (mySecret === "uppercase")
            msg = "HELLO JSON";
        else
            msg = "Hello json";
        res.json({ "message": msg })
    })

// Initialize server
app.listen(3000, () => {
    console.log("Running on port 3000.");
});

app.use(express.static(__dirname + "/public"));

// Export the Express API
module.exports = app;