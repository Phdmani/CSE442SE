var createError = require('http-errors');
var express = require('express');
var session=require('express-session');
var bodyParser=require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql=require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'expressBuffa@lo99',
    database:'movieapp'

})
connection.connect();
 
global.db = connection;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/login',function(req,res){
 
    var username=req.body.username;
    var password=req.body.password;


    if(username && password){
      db.query('SELECT * FROM userinfo WHERE username=? AND password=?', [username,password],function(error,results,fields){
        if(results.length){
          req.session.loggedin=true;
          req.session.username=username;
          res.redirect('/');
          res.end()
        }else{
          res.send("Invalid Username/Password");
        }
      });
    }else{
      res.send("Enter your Username and Password");
      res.end();
    }




});

app.post('/signup',function(req,res){

    var username=req.body.username;
    var password=req.body.password;


    if(username && password){
      db.query(`INSERT into userinfo (username,password)
      VALUES('${username}','${password}')`,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send('success');
      });
    }else{
      res.send("Enter your Username and Password");
      res.end();
    }


});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
