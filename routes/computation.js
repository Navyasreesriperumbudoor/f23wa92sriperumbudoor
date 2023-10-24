var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(req.query.x==undefined){
  var RandomValue= Math.random().toFixed(2);
}
else{
  RandomValue= req.query.x; }

  var tanhVal=Math.tanh(RandomValue).toFixed(2);
  res.render(`computation`,{tanhVal: `tanh(${RandomValue}) value is= ${tanhVal}`});
});

module.exports = router;
