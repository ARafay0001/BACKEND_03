const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("backend is runnnnnnnnnning....")
})
app.get("/api/health", (req, res) => {
    res.json(
        {
    status: "ok",
    message: "API is healthy"
    })
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
})