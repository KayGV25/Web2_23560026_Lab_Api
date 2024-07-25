const Rest = require('../utils/restware.util');
module.exports = {
    getAllImage: function (req, res) {
        const out = { title: 'Images', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneImage: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Image', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneImage: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Image', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneImage: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Image', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneImage: function (req, res) {
        const out = { title: 'Image', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};