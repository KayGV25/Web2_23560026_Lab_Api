const albumService = require('../services/album.service.js');

module.exports = function (app) {
    app.get('/api/v1/albums', albumService.getAllAlbum);
    app.get('/api/v1/albums/:id', albumService.getOneAlbum);
    app.post('/api/v1/albums/create', albumService.createOneAlbum);
    app.put('/api/v1/albums/update', albumService.updateOneAlbum)
    app.delete('/api/v1/albums/delete', albumService.deleteOneAlbum)
};