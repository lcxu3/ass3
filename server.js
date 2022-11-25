const express = require('express');
const session = require('express-session');
const hbs = require('express-hbs');
const app = express();
const bodypaeser = requrie ("body-parser");
const clientSession = require ("client-sessions")

app.listen (8080);

app.post("/login", fucntion(res,req){
    var email= req.body.email;
    var password= req.body.password;
    fullName = "Lily Xu";
    email = "sder@gmail.com";
    if(username && passowrd) {
    
        req.session_obj.userInfo ={
       fullName: fullName,
       username:username,
       email: email,
   
       p:1
        }
        res.redirect(/"admin");
    }
    
app.use (clientSessions){
    cookieName: "obj",
    secret: "dewi546920fnefdPE%%633",
    duration: 10*60*1000,
    activeDuration: 3*60*1000
    }));

app.get("admin", login, function(req,res) {
res.redirect("admin", {layout:fasle});
    });
var websiteSchema = new Schema({
 
    "title": String,
    "date": int,
   "content": string,
    
  });

  var websiteAdmin = new websiteAdmin({
  title: "What new in drama",
  date: "25-11-2022"
  content: "drama"
  });
  

  app.post('/', function (req, res) {
    res.send('POST ')
  }) 

  app.get("/", function(req,res){
      res.send("</a>");
  });
  
  app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/');

app.get('/', (req,res) =>{
    res.render('blog', {layout: 'blog'})
});

app.get('/blog', (req,res) =>{
    res.render('blog', {layout: 'blog'})
});

app.get('/article/:id', (req,res) =>{
    res.render('article', {layout: 'article'})
});

app.get('/login', (req,res) =>{
    res.render('login', {layout: 'login'})
});

app.get('/regist', (req,res) =>{
    res.render('register', {layout: 'register'})
});
    });

  app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });
 
  const port = process.env.PORT || 4000;
  const server = app.listen(port, () => {
      console.log('Connected to port ' + port)
  })
  
 
  const user = require('./resigter.routes');

  app.use('/user', user)
  

  const login = require('./login.routes');

  app.use('/login', login)

