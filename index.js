var express = require("express")
var app = express()
var student = require("./models/student")

app.get("/students/?(.json)?", function( req, res ){
  var results = student.all()
  if( req.query.search ){
    results = student.search(req.query.search)
  }
  res.jsonp( results ) 
})

app.get("/students/:id", function( req, res ){
  var result = student.find(req.params.id)
  res.jsonp( result ) 
})

app.listen(2370, function( req, res ){
  console.log("app listening on port 2370")
})