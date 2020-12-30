const createError = require('http-errors'),
      express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan');

const indexRouter = require('./routes/index');
const blankRouter = require('./routes/blank');
const app = express();

// view engine setup
app
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug');

app
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')));
    // .use(require('connect-history-api-fallback')());

app.use('/', blankRouter);
app.use('/api', indexRouter);


app
    .use(function (req, res, next) {
        next(createError(404));
    })
    .use(function (err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error');
    });


app
    .set('port', process.env.PORT || 3000)
    .listen(app.get('port'), ()=>{
      console.log('Express started on http://localhost:' + app.get('port') + '; press');
    });


module.exports = app;

