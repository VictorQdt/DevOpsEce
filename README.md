# Projet nodejs ING4

This project intends to create a message system using node js.

## Utilisation

Since the project is still at its begining, nothing is really usable at the moment. Any help to understand how node js and express work is appreciated.

## Roadmap

Next implementations will be to make the server linked to a database using mysql

## Last changes

We added in the server a way to respond to different kind of request (GET, POST, DELETE ...)

e.g. :
```javascript
 app.post('/users', function(req, res){...}
 app.delete('/users/:id(\\d+)', function(req, res){...}
```

 And you can add parameters in the url (for users only)

 e.g. :
 ```javascript
 app.get('/users/:id(\\d+)', function(req, res) 
```

 ## License
 [MIT](https://choosealicense.com/licenses/mit/)