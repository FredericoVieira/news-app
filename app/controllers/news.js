module.exports.publications = function(app, req, res){
    var connection = app.config.db();
    var newsModel = new app.app.models.news(connection);

    newsModel.getPublications(function(error, result){
        res.render('news/publications', {publications: result});
    });
}

module.exports.publication = function(app, req, res){
    var connection = app.config.db();
    var newsModel = new app.app.models.news(connection);

    var publication_args = req.query;

    newsModel.getPublication(publication_args, function(error, result){
        res.render('news/publication', {publication: result});
    });
}

