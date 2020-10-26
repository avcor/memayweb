const express = require("express");

app.use(express.static(path.join(__dirname, 'build')));

//Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//Second Page
app.get("/privacy-policy", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on port 3001");
});