const tagService = require('../services/tag.service');

module.exports = function (app) {
    app.get('/api/v1/tags', tagService.getAllTag);
    app.get('/api/v1/tags/:id', tagService.getOneTag);
    app.post('/api/v1/tags/:id/create', tagService.createOneTag);
    app.put('/api/v1/tags/:id/update', tagService.updateOneTag);
    app.delete('/api/v1/tags/:id/delete', tagService.deleteOneTag);
};