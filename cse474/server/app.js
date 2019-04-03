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
    user:'bina',
    password:'Bina@cse123',
    database:'myDB'

})

var username='';
var password='';
var title = '';

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

app.post('/user-logout', (req,res) =>{
  username ='';
  password ='';
  res.redirect('/');

  console.log('Logged Out')
  console.log('User:'+username)

})

app.post('/user-login',function(req,res){
 
    username=req.body.username;
    password=req.body.password;


    if(username && password){
      db.query('SELECT * FROM UserInfo WHERE username=? AND password=?', [username,password],function(err,results,fields){
        if (err) throw err;
        console.log("Connected!");
        console.log(results)
        if(results.length){
          req.session.loggedin=true;
          req.session.username=username;
          res.redirect('/home');
          console.log('Logged In')
          console.log(username)

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

app.post('/user-add-movie', (req,res) =>{
  title =req.body.t
})
app.post('/user-add-movies', (req,res) =>{
  console.log('hi')
    title =req.body.user

      console.log(title)
      console.log(username)
      if ( username =='') throw err;
        db.query(`INSERT into Movies (title,users) VALUES('${title}','${username}')`,function(err,results,fields){
        if (err) throw err;
        console.log('success')


})

});
app.post('/user-a-moviees',function(req,res){
      title = req.body.title;
        db.query('SELECT * FROM Movies WHERE users=?', [title],function(err,results,fields){
        if (err) throw err;
        console.log('success')


})

});

app.post('/signup',function(req,res){

    username=req.body.username;
    password=req.body.password;


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
