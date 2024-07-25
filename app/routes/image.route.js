const imageService = require('../services/image.service.js');

module.exports = function (app) {
    app.get('/api/v1/images', imageService.getAllImage);
    app.get('/api/v1/images/:id', imageService.getOneImage);
    app.post('/api/v1/images/create', imageService.createOneImage);
    app.put('/api/v1/images/update', imageService.updateOneImage)
    app.delete('/api/v1/images/delete', imageService.deleteOneImage)
};