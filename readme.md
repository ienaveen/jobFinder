
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
     
                                
                                
                                