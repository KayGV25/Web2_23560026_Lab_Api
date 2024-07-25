const userService = require('../services/user.service.js');

module.exports = function (app) {
    app.get('/api/v1/users', userService.getAllUser);
    app.get('/api/v1/users/:id', userService.getOneUser);
    app.post('/api/v1/users/create', userService.createOneUser);
    app.put('/api/v1/users/update', userService.updateOneUser);
    app.delete('/api/v1/users/delete', userService.deleteOneUser);
};