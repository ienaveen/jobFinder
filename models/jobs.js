var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
 title:{type:String},
 description:{type:String}
 
})     

var Job = mongoose.model('Job',jobSchema);
exports.seedJobs =function(){
Job.find({}).exec(function(err,collection){
    if(collection.length === 0)
    {
    console.log("into insert ");
    Job.create({title:"software Engineer", description:"builds software"});
    Job.create({title:"hardware Engineer",description:"builds hardware"});
    Job.create({title:"Tests",description:"Tests sofware"}); 
    }
})

}
