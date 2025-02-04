require("dotenv").config()
let http = require("http")
let express = require("express")
const dbConnect = require("./db/dbConnect")
const routes = require("./routes")

let app = express()

// for body
app.use(express.json())

// routes
app.use("/v1",routes)

// database connection
dbConnect()

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
})
