const Op = require('sequelize').Op;
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
            return Rest.sendError(res, 1, 'Unable to get Users', 400);
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
                    return Rest.sendError(res, 1, 'Unable to get User', 400);
                }
            })
        } catch (error) {
            return Rest.sendError(res, 1, error, 400)
        }
    },
    updateOneUser: function (req, res) {
        const {id, data, type} = req.body;
        const where = { id: id };
        let payload = {};
        switch (type) {
            case 'username':
                payload = { username: data };
                break;
            case 'password':
                payload = { password: data };
                break;
            case 'email':
                payload = { email: data };
                break;
            default:
                return Rest.sendError(res, 1, 'Invalid type', 400);
        }
        try {
            user.update(
                payload,
                { where: where },
            ).then(response => {
                return Rest.sendSuccessOne(res, "Success", 200)
            });
        } catch (error) {
            return Rest.sendError(res, 1, 'Failed to update', 400);
        }

    },
    deleteOneUser: function (req, res) {
        const {id} = req.body;
        const where = { id: id };

        try {
            user.destroy({
                where: where
            }).then(response => {
                return Rest.sendSuccessOne(res, "Success", 200)
            })
        } catch (error) {
            return Rest.sendError(res, 1, 'Failed to delete', 400);
        }
    },
    createOneUser: function (req, res) {
        const {username, password, email} = req.body;
        // Find if user already exists
        const attributes = ['email']
        const where = {
            [Op.or] : {
                email: email,
                username: username
            }
        }
        try {
            user.findOne({
                where: where,
                attributes: attributes
            }).then((result) => {
                'use strict';
                if(result){
                    return Rest.sendError(res, 1, 'User already exists', 400);
                }
                else{
                    try {
                        user.create({username: username, password: password, email: email})
                        return Rest.sendSuccessOne(res, {message: 'User created successfully'}, 200);
                    } catch (error) {
                        return Rest.sendError(res, 1, 'Unable to create User', 400)
                    }
                }
            });
        } catch (error) {
            return Rest.sendError(res, 1, error, 400)
        }
    },
};