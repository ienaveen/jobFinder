var express = require("express");
var jobModel = require('./models/jobs.js');
var jobsData = require("./jobsdata.js")

var app =express();
app.set("view engine","jade");
app.use(express.static(__dirname+ '/public'))
app.set('views' ,__dirname + '/server/views');

app.get('/api/jobs',function(req,res){
   jobsData.findJobs().then(function(collection){
       res.send(collection);
   })
});
app.get('*',function(req,res){
     res.render('index');
});     
//mongoose.connect('mongodb://localhostkkkkk/jobfinder');
  jobsData.connectDB('mongodb://naveen:naveen@ds031571.mongolab.com:31571/jobfinder')
  .then(function(){
    console.log("mongodb connected");
    jobsData.seedJobs();  
  });

/*var con = mongoose.connection;
con.once('open',function(){
    
});*/
app.listen(process.env.PORT,process.env.IP);
