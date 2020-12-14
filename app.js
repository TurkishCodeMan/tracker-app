const express=require("express");
const app=express();
const morgan=require("morgan");
const dotenv=require("dotenv")
const trackerRoute=require("./routes/tracker")
dotenv.config({path:"./config.env"});


if(process.env.NODE_ENV=="development"){
    app.use(morgan("dev"));
}

if(process.env.NODE_ENV=='production'){
    app.use(express.static(__dirname + "/public/"));; // for serving the HTML file
}

app.use("/api/v2",trackerRoute);

let port=process.env.PORT || 5000
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(port,server_host,(err)=>{
    if (err)
        return console.log(err)

    console.log("Listening on port "+port)
})