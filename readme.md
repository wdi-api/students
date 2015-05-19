# Students API

This read-only API is deployed at http://wdi-api.jshawl.com/students

## `get /students`

Returns a list of all students

## `get /students?search=regex`

Where `regex` is a regular expression, returns an array of all students,
where the object's value matches the case-insensitive regular expression.