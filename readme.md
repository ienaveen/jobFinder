
Test first development 

1)npm init 

http://nodejsrocks.blogspot.ca/2012/04/need-reasons-to-love-jade-template.html
2)npm install jade express bower  --save --> to storage the module in the package.json
3) bower init 
4)Express basics 
  1)ALways keep a public folder for all static components and send back
  the public folder in express as static
   app.use(express.static(__dirname+ '/public'))
   2)public will have two folders 1) bower components 
                                2) app for all angularjs 
   3)start the server side view with index.jade wwhich will be returned 
      first ,keep the file in the server/views 
   app.set('views' ,__dirname + '/server/views');                                
   4) we can get the getbootstrap.com/components
   hosting solutions 
     1) first install heroku tool belt and follow the instructions at 
     https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
     loginto heroku using heroku login command 
     2) if we are usinga proxy then 
      set HTTP_PROXY=http://proxy.server.com:portnumbe
      
     3)1)git init 
       2)create a new file .gitignore file --> .c9,data,node_modules 
       3)git add -A 
       4)git config --global user.email "ie.naveen@gmail.com"
       5) git config --global user.name "k naveen" 
       6) git commit -m "root"
       7) heroku login 
       8)heroku create 
     9)git push heroku master 
     10) heroku ps:scale web=1
     
     inorder to recommit code 
     1)git add -A 
     2)git commit -m "root"
     3)git push heroku master 
     4)heroku ps:scale web=1
     
     once u type these commands the output can be seen in https://peaceful-island-7943.herokuapp.com/
     all apps uses processmodel inorder to have the app running we need to up the 
       scale to 1 
       heroku ps:scale web=1 
       
     11).bowerrc file will tell where the bower components have to be installed 
        so keep the .bowerrc file with public/bower_comp other wise by default it 
        will be root/bower comp 
     12) For deploying to heroku or any other in thpackage.json we need to 
     add a post script after dependencies so that boer is initialized 
     and will take bower.json as input 
"scripts": {
    "postinstall": "./node_modules/bower/bin/bower install"
}
       
       13) create a file with name mongod and keep the content as mongod --bind_IP=$IP --db-path=data --nojournal --rest "$@"
    14) change the permisions on the mongod file by giving chmod a+x mongod in the command 
    15)npm install mongoose 
    16) bower components are stored in the location where a filer named .bowerrc file will point the public/bower_components 
    17)npm install mocha -g  and type mocha to start the test 
    18) as u start writing tests try typing mocha at regular intervals to check the outcome 
    19)chai is the assertion library that gives the expect functionality
    20) npm install --save-dev chai 
    21) var expect = require("chai").expect
    22) mongoose call is asyncronous and test is syncronous 
       and test finishes before mongoose callback .
        so mocha solves it by then parameter
    23) call the seedJobs after reset .pass a callback to check that the 
     function is done .for now call the callback after the last job create Create        
    24) Instead of using the promise apis an alternative is to pass the function 
    itself to other calling function as a paramter and then after the function 
    call is successful then again call the callback function
    25)after last seed job create is successful call the callback   
    26)AMong all the promise apis bech marks show that blue bird is the 
     fastest and it is similar to promise api 
    27) npm install --save bluebird  
      wrap a function in a promise using promisify 
    28) this.timeout(100000); must be written in the mocha test for it section so 
    the tests will not be timed out 
    29)for all ayncronous we need to keep the done as the last paramter and call the done at end 
    30) if we use exports.findJobs in a module and try to call the same findJobs inside the module it will
      give an error so write a var findJobs = function() and 
      ====then write exports.findJobs = findJobs================
    31) running tests ,sending emails when tests fail ,if all pass deploy to heroku 
      bdd ,test first ,supertest to mock a client to call the jobs api on the backend 
      jobs API -- to make the tests pass 
      angular testing using karma which will test the code on front end 
    32)login to https://github.com/new github site to create a new repository and copy the url in the next step 
    https://github.com/ienaveen/jobFinder.git
    
    33) git remote add github  https://github.com/ienaveen/jobFinder.git
    
    34)Type git remote and check for both heroku and github 
    
    35) login to codeship.io with ie.naveen@gmail.com g777& and create first project select github repository and 
       select the jobFinder drop down -->select node 
       
    36)   
    create a new repository on the command line
         GIT hub instructions 
    echo # jobFinder >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/ienaveen/jobFinder.git
    git push -u origin master
    …or push an existing repository from the command line


    git remote add origin https://github.com/ienaveen/jobFinder.git
    git push -u origin master
    
    
    
    
    
    
    
    
    
    
    
                                
                                
                                