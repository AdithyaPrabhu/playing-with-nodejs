var express = require('express');
var service = require('../dataService');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  console.log(">> /api/users");
  req.accepts('application/json');
  res.send(service.getList());
});

router.get('/user/:id', function(req, res, next) {
  console.log(">> /api/users");
  var requestId= parseInt(req.params.id);
  req.accepts('application/json');
  if(service.getList().length > requestId){
    res.send(service.getList()[requestId]);
  }else{
    res.send({}); //else return blank
  }
});

router.get('/userlist', function(req, res, next) {
  res.render('userlist', { title: 'Tavant Technologies', page:"Users Screen", data:service.getList()});
});

router.post('/login', function(req, res, next) {
  console.log(">> /api/login");
    req.accepts('application/json');
    var data=req.body;
    console.log(data);
    if(data.username =='admin' && data.password =='admin'){
      res.send("success");
    }else{
    	 console.log("return fail");
      res.send("fail");
    }
});

router.post('/adduser', function(req, res, next) {
  console.log(">> /api/adduser");
    req.accepts('application/json');
    var data=req.body;
    data.id=service.getList().length+1;
    console.log(data);
    service.getList().push(data);
    res.send("success");
    
});

router.get('/deleteuser/:index', function(req, res, next) {
  console.log(">> /api/deleteuser");
  var index= parseInt(req.params.index);
  var tempList=[];
  for (var i=0;i<service.getList().length;i++){
    if(i!=index){
      tempList.push(service.getList()[i]);
    }
  }
  service.setList(tempList);
  res.send("success");
});
module.exports = router;
