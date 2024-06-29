import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//app config
const app = express()
const port = 4000 //my port


//middleware
app.use(express.json()) //we can parsing to json 
app.use(cors()) //we can access backend for any frontend


// db connection 
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))




app.get("/",(req,res)=>{
    res.send("API Working")

})


app.listen(port , ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})

