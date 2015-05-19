var express = require("express")
var app = express()
var student = require("./models/student")

app.get("/", function( req, res ){
  var results = student.all()
  if( req.query.search ){
    results = student.search(req.query.search)
  }
  res.send( results ) 
})

app.listen(3000, function( req, res ){
  console.log("app listening on port 3000")
})