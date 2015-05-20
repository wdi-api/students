var express = require("express")
var app = express()
var student = require("./models/student")

app.get("/students/?", function( req, res ){
  var results = student.all()
  if( req.query.search ){
    results = student.search(req.query.search)
  }
  res.send( results ) 
})

app.get("/students/:id", function( req, res ){
  var result = student.find(req.params.id)
  res.send( result ) 
})

app.listen(2370, function( req, res ){
  console.log("app listening on port 2370")
})