const express = require('express');
const path = require('path');
const app = express();

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


const mainRouter = require('./routes/main'); // Rutas main

app.use('/', mainRouter);

app.use((req, res, next) => next(createError(404)));
// ************ error handler ************
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
/*
app.get('/', function(req, res){
    res.send('*** FINTUAL ***');
    res.end();
});
*/
module.exports = app;