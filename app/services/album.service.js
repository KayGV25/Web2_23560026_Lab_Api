const Rest = require('../utils/restware.util');
module.exports = {
    getAllAlbum: function (req, res) {
        const out = { title: 'Albums', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Album', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Album', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneAlbum: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Album', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneAlbum: function (req, res) {
        const out = { title: 'Album', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};