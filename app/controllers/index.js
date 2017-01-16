module.exports.home = function(app, req, res){
    
    var connection = app.config.db();
    var newsModel = new app.app.models.news(connection);

    newsModel.last5Publications(function(error, result){
        res.render('home/index', {publications: result});
    });
}
