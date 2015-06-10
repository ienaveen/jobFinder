var express = require("express");
var mongoose = require("mongoose");
var jobModel = require('./models/jobs.js');

var app =express();
app.set("view engine","jade");
app.use(express.static(__dirname+ '/public'))
app.set('views' ,__dirname + '/server/views');

app.get('/api/jobs',function(req,res){
   mongoose.model('Job').find({}).exec(function(error,collection){
       res.send(collection);
   })
});
app.get('*',function(req,res){
     res.render('index');
});     
//mongoose.connect('mongodb://localhost/jobfinder');
  mongoose.connect('mongodb://naveen:naveen@ds031571.mongolab.com:31571/jobfinder');

var con = mongoose.connection;
con.once('open',function(){
    console.log("mongodb connected");
    jobModel.seedJobs();
});
app.listen(process.env.PORT,process.env.IP);
