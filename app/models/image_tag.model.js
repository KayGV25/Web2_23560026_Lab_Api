const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const image_tag = mySequel.define('image_tag', {
    image_id: {
        type: sequel.BIGINT(20),
        allowNull: false,
        primaryKey: true,
    },
    tag_id: {
        type: sequel.BIGINT(20),
        allowNull: false,
        primaryKey: true,
    }
}, {
    underscored: false,
    timestamps: false,
    // updatedAt: false,
    // createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'image_tags',
});

module.exports = image_tag;
