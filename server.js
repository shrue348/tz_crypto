var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var io = require('socket.io').listen(9999); 

// Sockets
io.on('connection', function (socket) {
  var ID = (socket.id).toString().substr(0, 5);
  var time = (new Date).toLocaleTimeString();

  console.log('user id: '+ ID +' connected in '+ time);
  // console.log(socket);

  socket.on('disconnect', function () {
    console.log('user id: '+ ID +' disconnected in '+ time);
  });

  socket.on('login', function(){
    var a = new Generator(600,1000, 'line1', socket.id),
        b = new Generator(200,600, 'line2', socket.id)
    a.init()
    b.init()
  });
});

// Class Genegator
var Generator = function(min, max, line, id){
  this.timeout = null
  this.min     = min
  this.max     = max
  this.line    = line

  this.init = ()=>{
    random = (min, max)=>{
      return Math.random() * (max - min) + min;
    }

    clearTimeout(this.timeout);
    return this.timeout = setTimeout(() => {
      var num = random(min, max)
      var delay = random(min - 200, max + 200)
      io.to(id).emit(line, num)

      setTimeout(this.init, delay);
    }, 1000);
  }
}

// Passport
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

// Users
var users = [
  {
    id: 1,
    name: 'user1',
    password: 'test1'
  },
  {
    id: 2,
    name: 'user2',
    password: 'test2'
  }
];

// Strategy
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

// App
var app = express();
var allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  next();
}

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(allowCrossDomain)

app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});

app.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }

  var user = users[_.findIndex(users, {name: name})];
  if( !user ){
    res.status(401).json({message:"Пользователь не найден"});
  }

  if(user.password === req.body.password) {
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "main", token: token}); // маршрутим на страницу main
  } else {

    res.status(401).json({message:"Неверный пароль"});
  }
});


app.listen(3000, function() {
  console.log("Express running");
});
