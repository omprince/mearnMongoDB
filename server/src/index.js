import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'

dotenv.config({path:"./env"})
const app = express()

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{console.log(`Your server is running on ${process.env.PORT} port`)})

}).catch((err)=>{
    console.log(`Mongodb is successfully connected`, err)
})


/*
const app = express()
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR : ",error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Your server is running on ${process.env.PORT} port`);
        })
    }catch(error){
        console.error("ERROR : ",error)
        throw err
    }
})()
*/