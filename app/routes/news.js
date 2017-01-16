module.exports = function(app){
    
    app.get('/publication', function(req, res){
        app.app.controllers.news.publication(app, req, res);
    });
    
    app.get('/publications', function(req, res){
        app.app.controllers.news.publications(app, req, res);
    });
}