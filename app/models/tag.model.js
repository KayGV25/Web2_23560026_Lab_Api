const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const tag = mySequel.define('tag', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequel.STRING(255),
        allowNull: false,
    }
}, {
    underscored: false,
    timestamps: false,
    // updatedAt: false,
    // createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'tags',
});

module.exports = tag;
