// 1.加载mongoose模块
var mongoose = require('mongoose');
// 2.链接mongoDB数据库
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/qufei');
// 3.数据库链接错误信息
db.on("error",function(error){
        console.log(error);
});
// 4.定义模型
var Schema = mongoose.Schema;
var news = new Schema({
    title:{type: String},
    content:{type:String},
    author:{type:String,default:'qufei'},
    date:{type:Date,default:Date.now}
});
// 5.创建模型,第一个参数是集合(表名)
var myModel  = db.model('news',news);
module.exports = myModel;