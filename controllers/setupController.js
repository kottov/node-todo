var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {

        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        if(process.env.NODE_ENV === 'dev') {
            Todos.remove({}, function(err, results) {
                Todos.create(starterTodos, function(err, results) {
                    res.send(results);
                });
            });
        } else {
            res.send('You can setup only development environment');
        }
    });
}