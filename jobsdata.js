var mongoose = require("mongoose");
var Promise = require("bluebird");
var Job = mongoose.model('Job');
 var findJobs = function(query) {
    return Promise.cast(mongoose.model('Job').find(query).exec());
}
exports.findJobs =findJobs;
var jobs = [
    {title:"software Engineer", description:"builds software"},
    {title:"hardware Engineer",description:"builds hardware"},
    {title:"Tests",description:"Tests sofware"}];
    
exports.connectDB = Promise.promisify(mongoose.connect, mongoose);
var createJob = Promise.promisify(Job.create,Job);


exports.seedJobs =function(){
    console.log("into create job");
  return findJobs({}).then(function(collection){
      if(collection.length === 0)
    {
     console.log("into insert ");
    return Promise.map(jobs,function(job)
    {
        return createJob(job);
    })
     
    }
})


}

/*exports.seedJobs =function(){
    return new Promise(function(resolve, reject){
    
    Job.find({}).exec(function(error,collection){
        console.log("into fun");
        console.log("length 0 "+collection.length)
       if(collection.length === 0)
    {
       console.log("length 0 ");
        Job.create({title:"software Engineer", description:"builds software"}),
    Job.create({title:"hardware Engineer",description:"builds hardware"}),
    Job.create({title:"Tests",description:"Tests sofware"},resolve)
    }
})
});
}*/
