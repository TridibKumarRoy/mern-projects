require("dotenv").config()
const express = require("express");
const app = express()

//* utils
const {DBConnect} = require("./config/dbConnect")

//* routes
const bookStoreRoutes = require("./routes/bookStoreRoutes")

app.use(express.json())
app.use("/api/v1/", bookStoreRoutes)



const port = process.env.PORT
DBConnect().then(
    app.listen(port, () => {
        console.log(`app is running on ${port}`);
        
    })

)