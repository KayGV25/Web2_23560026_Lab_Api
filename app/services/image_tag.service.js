const Rest = require('../utils/restware.util');
module.exports = {
    getAllImageTag: function (req, res) {
        const out = { title: 'ImageTags', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneImageTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageTag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneImageTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageTag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneImageTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'ImageTag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneImageTag: function (req, res) {
        const out = { title: 'ImageTag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};