const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const image_album = mySequel.define('image_album', {
    image_id: {
        type: sequel.BIGINT(20),
        allowNull: false,
        primaryKey: true,
    },
    album_id: {
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
    tableName: 'image_albums',
});

module.exports = image_album;
