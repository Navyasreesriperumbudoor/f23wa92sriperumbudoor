var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Navyasree Sriperumbudoor' });
if(req.query.x==undefined){
  var RandomValue= Math.random();
}
else{
  RandomValue= req.query.x; }

  var tanhVal=Math.tanh(RandomValue);
  res.render(`computation`,{tanh: `tanh(${tanh}) value is= ${tanhVal}`});
});

module.exports = router;
