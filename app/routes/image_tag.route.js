const ImagesTagService = require('../services/image_tag.service');

module.exports = function (app) {
    app.get('/api/v1/image_tags', ImagesTagService.getAllImageTag);
    app.get('/api/v1/image_tags/:id', ImagesTagService.getOneImageTag);
    app.post('/api/v1/image_tags/create', ImagesTagService.createOneImageTag);
    app.put('/api/v1/image_tags/update', ImagesTagService.updateOneImageTag);
    app.delete('/api/v1/image_tags/delete', ImagesTagService.deleteOneImageTag);
};