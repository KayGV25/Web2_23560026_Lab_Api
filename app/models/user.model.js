const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const user = mySequel.define('user', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: sequel.STRING,
        allowNull: false,
    },
    password: {
        type: sequel.STRING,
        allowNull: false,
    },
    email: {
        type: sequel.STRING,
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
    tableName: 'users',
});

module.exports = user;
