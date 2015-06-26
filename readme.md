# Students API

This read-only API is deployed at http://api.wdidc.org/students

## `get /students`

Returns a list of all students

## `get /students?search=regex`

Where `regex` is a regular expression, returns an array of all students,
where the object's value matches the case-insensitive regular expression.

## `get /students/mssing_info`

Returns list of students which are missing some information


## Deployment

Push to production repo (git@git.wdidc.org:APIs/students.git)
