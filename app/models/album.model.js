const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const album = mySequel.define('album', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
        type: sequel.BIGINT(20),
        allowNull: false,
    },
    title: {
        type: sequel.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequel.TEXT,
        allowNull: true,
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
    tableName: 'albums',
});

module.exports = album;
