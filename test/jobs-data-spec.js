var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require('../models/jobs');
var Promise = require("bluebird");
var jobsData = require("../jobsdata.js");

function resetJobs() {
    return new Promise(function(resolve, reject) {
        //console.log("reset function");
        mongoose.connection.collections['jobs'].drop(resolve, reject);
        //console.log("after reset");
        mongoose.model('Job').find({}).exec(function(error, collection) {
            //console.log('ft'+JSON.stringify(collection)); 
        })

    })

}

//var Job = mongoose.model('Job',jobSchema);



describe("get jobs", function() {
    var jobs;
    before(function(done) {
        this.timeout(10000);
        
        //jobsData.connectDB('mongodb://naveen:naveen@ds031571.mongolab.com:31571/jobfinder')
        jobsData.connectDB('lllllll://naveen:naveen@ds031571.mongolab.com:31571/jobfinder')
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            })
    })
    it("should never be empty", function() {
        
        expect(jobs.length).to.be.at.least(1);
       
    });
    it("should have a job with title", function() {

        expect(jobs[0].title).to.not.be.empty;
       
    });
    it("should have a job with description", function() {
        
        expect(jobs[0].description).to.not.be.empty;
       
    });
    
});