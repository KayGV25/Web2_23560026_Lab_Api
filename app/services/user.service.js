const Rest = require('../utils/restware.util');
const user = require('../models/user.model');

module.exports = {
    getAllUser: function (req, res) {
        try {
            const attributes = ['username', 'password', 'email'];
            
            user.findAll(
                {
                    attributes: attributes,
                }
            ).then((result) => {
                'use strict';
                if(result){
                    return Rest.sendSuccessOne(res, result, 200);
                }
            })
        } catch (error) {
            return Rest.sendError(res, 1, 'unavailable_account', 400);
        }
    },

    getOneUser: function (req, res) {
        let id = req.params.id || '';
        try {
            const attributes = ['username', 'password', 'email'];
            const where = {id : id};
            
            user.findOne({
                where: where,
                attributes: attributes,
                raw: true
            }).then((result) => {
                'use strict';
                if (result) {
                    return Rest.sendSuccessOne(res, result, 200);
                }
                else {
                    return Rest.sendError(res, 1, 'unavailble_account', 400);
                }
            })
        } catch (error) {
            return Rest.sendError(res, 1, 'unavailble_account', 400)
        }
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