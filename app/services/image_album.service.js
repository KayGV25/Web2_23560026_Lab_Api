const Rest = require('../utils/restware.util');
module.exports = {
    getAllImageAlbum: function (req, res) {
        const out = { title: 'ImageAlbums', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneImageAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageAlbum', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneImageAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageAlbum', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneImageAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageAlbum', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneImageAlbum: function (req, res) {
        const out = { title: 'ImageAlbum', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};