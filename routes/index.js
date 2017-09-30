var express = require('express');
var app = express();
var router = express.Router();

//
// app.use("/partials", function(req, res){
//     res.render(req.path);
// });

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('layout', { title: 'matt schaefer' });
 });
 router.get('/*', function(req, res, next) {
   res.render(req.params.filename, { title: 'matt schaefer' });
 });
 // router.get('/about', function(req, res, next) {
 //   res.render('about', { title: 'Express' });
 // });
 // router.get('/*', function(req, res, next) {
 //   res.render(req.params.filename, { title: 'Express' });
 // });
// app.get('*', function(req, res){
//     res.render('index');
// });
// //
// router.get('/partials/*', function(req, res){
//     res.render('partials/' + req.params.filename);
// })
//


module.exports = router;
