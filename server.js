const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/Shiksha/'));

app.listen(process.env.PORT || 8080);

app.get('/*',(req,res)=>{
   // console.log( path.join(__dirname + '/dist/herokuTest/'));
   res.sendFile(path.join(__dirname + '/dist/Shiksha/'));
})

console.log("server listining");