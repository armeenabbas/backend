const express= require("express")
const app = express()
const port=5000

//middle way
const logger=function(req,res,next){
    console.log('api console')//logic
    next()
}
app.use(logger)


//method get post put/update/patch delete
//logger can be put in middle of function
app.get("/",(req,res)=>{
    res.send([{id:1,title:"post"}])
})

app.delete("/delete",(req,res)=>{
    res.send("data is delete")
})

app.post("/post",(req,res)=>{
    res.send("my post")
})







app.listen(
  port,
    ()=> console.log(`server is running at ${port}`))
    //server start/initialized
    