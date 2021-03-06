var api = require('../api');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('modules/general/index', { title: 'Express' });
});

router.get('/who/:user?', function (req, res, next) {
  var name = req.params.user;
  res.send('respond with the name '+ name);
});
router.get('/new', function(req, res) {
    res.render('index', {
    	layout: 'layouts/layout_new',
    	title: 'New layout rendered'
    });
});

router.get('/modules', function (req, res) {
    res.render('modules/general/index', {
    	title: 'New modules folder'
    });
});

router.get('/search', function (req, res){
  //call the api apiGet and create callback function
  api.apiGet(function (data) {
    console.log(data);
    // render to the index.jade and pass the data from api call
    res.render('modules/search/search', { 
      
      title: 'Search',
      layout: false,
      result: data
    });
  });
});

module.exports = router;
