const express = require("express");

const app = express()

app.get('/', (req, res) => {
    return res.send("hello")
})

const port = 3000
app.listen(port, () => {
    console.log(`app is running on ${port}`);
    
})