const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const image = mySequel.define('image', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    filename: {
        type: sequel.STRING,
        allowNull: false,
    },
    original_filename: {
        type: sequel.STRING,
        allowNull: false,
    },
    title: {
        type: sequel.STRING,
        allowNull: false,
    },
    width: {
        type: sequel.INTEGER,
        allowNull: false,
    },
    height: {
        type: sequel.INTEGER,
        allowNull: false,
    },
    size: {
        type: sequel.INTEGER,
        allowNull: false,
    },
    mime_type: {
        type: sequel.STRING(100),
        allowNull: false,
    },
    created_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
    updated_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
}, {
    underscored: false,
    timestamps: false,
    // updatedAt: false,
    // createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'images',
});

module.exports = image;
