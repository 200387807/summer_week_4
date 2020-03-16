var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Zinal', (req, res, next) => {
  res.render('Zinal', {
    name : 'Zinal',
    age: 20,
    city: 'Brampton'
  });
});
router.get('/Om', (req, res, next) => {
  res.render('Om', {
    name : 'Om',
    age: 9,
    city: 'Brampton',
    relation : 'brother'
  });
});
router.get('/Yesha', (req, res, next) => {
  res.render('Yesha', {
    name : 'Yesha',
    age: 20,
    city: 'Barrie',
    relation : 'friend'
  });
});
router.get('/Megha', (req, res, next) => {
  res.render('Megha', {
    name : 'Megha',
    age: 21,
    city: 'Toronto',
    relation : 'friend'
  });
});

router.get('/Happy', (req, res, next) => {
  res.render('Happy', {
    name : 'Happy',
    age: 21,
    city: 'Brampton',
    relation : 'friend'
  });
});

/*router.get('/Happy', (req, res, next) => {
  res.render('Happy', {
    name : 'Happy',
    age: 21,
    city: 'Brampton',
    relation : 'friend'
  });
});*/

module.exports = router;
