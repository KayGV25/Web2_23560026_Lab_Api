const Op = require('sequelize').Op;
const Rest = require('../utils/restware.util');
const tag = require('../models/tag.model');

module.exports = {
    getAllTag: function (req, res) {
        try {
            const attributes = ['id', 'name'];
            
            tag.findAll(
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
            return Rest.sendError(res, 1, 'Unable to get Tag', 400);
        }
    },

    getOneTag: function (req, res) {
        let id = req.params.id || '';
        try {
            const attributes = ['id', 'name'];
            const where = {id : id};
            
            tag.findOne({
                where: where,
                attributes: attributes,
                raw: true
            }).then((result) => {
                'use strict';
                if (result) {
                    return Rest.sendSuccessOne(res, result, 200);
                }
                else {
                    return Rest.sendError(res, 1, 'Unable to get Tag', 400);
                }
            })
        } catch (error) {
            return Rest.sendError(res, 1, error, 400)
        }
    },
    updateOneTag: function (req, res) {
        const {id, data} = req.body;
        const where = { id: id };
        let payload = { name: data};
        try {
            tag.update(
                payload,
                { where: where },
            ).then(response => {
                return Rest.sendSuccessOne(res, "Success", 200)
            });
        } catch (error) {
            return Rest.sendError(res, 1, 'Failed to update', 400);
        }

    },
    deleteOneTag: function (req, res) {
        const {id} = req.body;
        const where = { id: id };

        try {
            tag.destroy({
                where: where
            }).then(response => {
                return Rest.sendSuccessOne(res, "Success", 200)
            })
        } catch (error) {
            return Rest.sendError(res, 1, 'Failed to delete', 400);
        }
    },
    createOneTag: function (req, res) {
        const {name} = req.body;
        // Find if tag already exists
        const attributes = ['name']
        const where = {
            name: name,
        }
        try {
            tag.findOne({
                where: where,
                attributes: attributes
            }).then((result) => {
                'use strict';
                if(result){
                    return Rest.sendError(res, 1, 'Tag already exists', 400);
                }
                else{
                    try {
                        tag.create({name: name})
                        return Rest.sendSuccessOne(res, 'Tag created successfully', 200);
                    } catch (error) {
                        return Rest.sendError(res, 1, 'Unable to create Tag', 400)
                    }
                }
            });
        } catch (error) {
            return Rest.sendError(res, 1, error, 400)
        }
    },
};