var students = require("../students")
var _ = require("underscore")

module.exports = {
  find: function( id ){
    for(var i = 0; i < students.length; i++ ){
      if(students[i].github_user_id == id) 
	return students[i]
    }
    return null
  },
  all: function(){
    return students
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
    return _.uniq(found)
  }
}