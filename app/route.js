module.exports = function (app) {
    require('./routes/user.route')(app);
    require('./routes/image.route')(app);
    require('./routes/image_tag.route')(app);
    require('./routes/image_album.route')(app);
    require('./routes/album.route')(app);
    require('./routes/tag.route')(app);
};
