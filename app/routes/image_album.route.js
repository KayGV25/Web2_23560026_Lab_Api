const imageAlbumService = require('../services/image_album.service.js');

module.exports = function (app) {
    app.get('/api/v1/image_albums', imageAlbumService.getAllImageAlbum);
    app.get('/api/v1/image_albums/:id', imageAlbumService.getOneImageAlbum);
    app.post('/api/v1/image_albums/:id/create', imageAlbumService.createOneImageAlbum);
    app.put('/api/v1/image_albums/:id/update', imageAlbumService.updateOneImageAlbum)
    app.delete('/api/v1/image_albums/:id/delete', imageAlbumService.deleteOneImageAlbum); 
};