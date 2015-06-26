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
  missing_information: function(){
    var students_with_missing_information = [];
    var all = this.all();

    for(var i=0; i < all.length; i++){
      student = all[i];
      for(var attribute in student){
        if(!student[attribute]){
          students_with_missing_information.push( student );
          break;
        }
      }
    }
    return students_with_missing_information;
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
