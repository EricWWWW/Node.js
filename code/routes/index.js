var express = require('express');
var router = express.Router();
var AliDayu = require('node-alidayu')
var client = new AliDayu({
  app_key: '23539539',
  app_secret: 'c16950a22577bb08ca9ac0f5e0e29d15'
})
/* GET home page. */
router.get('/', function(req, res, next) {
	client.sms({
	  rec_num: '13700859025',
	  sms_free_sign_name: '阿通快递',
	  sms_template_code: 'SMS_27435385',
	  sms_param: {
	  	username:"qufei",
	   number: "3542"
	  }
	}).then(function (data) {
	  	console.log('sucess');
	}).catch(function (err) {
	  console.log('fail')
	})
  	res.render('index', {title: 'Express'});
});

module.exports = router;
