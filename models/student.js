var students = require("../students")
var _ = require("underscore")
module.exports = {
  all: function(){
    return _.map(students, function(student, index){
      student.id = index 
      return student
    })
  },
  search: function( query ){
    var regex = new RegExp( query, "gi" )
    var all = this.all()
    var i = 0, len = all.length
    var found = []
    for( ; i < len; i++ ){
      var student = all[i] 
      for( var prop in student ){
	var string = String(student[prop])
	if( string.match(regex) ){
	  found.push( student )
	}
      }
    }
    return found
  }
}