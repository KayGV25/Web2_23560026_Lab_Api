const Rest = require('../utils/restware.util');
module.exports = {
    getAllTag: function (req, res) {
        const out = { title: 'Tags', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Tag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Tag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneTag: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'Tag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneTag: function (req, res) {
        const out = { title: 'Tag', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};