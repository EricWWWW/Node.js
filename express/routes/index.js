var express = require('express');
var router = express.Router();
var myModel = require('../model/model');
/* GET home page. 
	router.get('/', function(req, res, next) {
	  res.render('index', { title: '新闻发布系统' });
	});
*/
const routes = (app) => {
	//首页
	app.get('/',function(req, res, next) {
		var title = '新闻发布系统';
		myModel.find({},(err,result) => {
			if (err) {
				return console.log(err);
			}else{
				res.render('index',{result,title});
			}
		});
	});
	//插入信息
	app.get('/insert',function(req,res,next){
		res.render('insert');
	});
	app.post('/insert',function(req,res,next){
		let newStudent = [{
            title: req.body.title,
            author: req.body.author,
            content:req.body.content,
            date:req.body.date
        }]
        myModel.create(newStudent, (err) => {
            if(err) return console.log(err)
            res.send("<a href='/'>添加成功，点击返回首页</a>")
        })
	});
	//删除信息
    app.get('/delete', (req, res, next) => {
        var id = req.query.id;
        myModel.remove({_id:id}, (err, result) => {
            if(err) return console.log(err)
            console.log(result.result)
            res.send("<a href='/'>删除成功，点击返回首页</a>")
        })
    })
    //更新信息
    app.get('/update',(req,res,next) => {
    	var title = "更新";
    	let id = req.query.id;
    	myModel.findOne({_id:id},(err,result) => {
    		if(err) return console.log(err);
    		res.render('update',{title,result});
    	});
    	
    });
    app.post('/update',(req,res,next) => {
    	let condition = {_id:req.body.id};
    	let updateData ={$set:{title: req.body.title,author: req.body.author,content:req.body.content,date:req.body.date}};
        myModel.update(condition,updateData, (err,result) => {
            if(err) return console.log(err)
            console.log(result);
            res.send("<a href='/'>更新成功，点击返回首页</a>")
        })
    });


}
module.exports = routes;
