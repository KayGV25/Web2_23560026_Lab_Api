const Rest = require('../utils/restware.util');
module.exports = {
    getAllUser: function (req, res) {
        const out = { title: 'Users', id: 'all'};
        return Rest.sendSuccessOne(res, out, 200);
    },

    getOneUser: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'User', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    updateOneUser: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'User', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    deleteOneUser: function (req, res) {
        let id = req.params.id || '';
        const out = { title: 'User', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
    createOneUser: function (req, res) {
        const out = { title: 'User', id: id};
        return Rest.sendSuccessOne(res, out, 200);
    },
};