module.exports = function(app){
    
    app.get('/publication-add', function(req, res){
        app.app.controllers.admin.publication_add(app, req, res);
    });

    app.post('/publication/save', function(req, res){
        app.app.controllers.admin.publication_save(app, req, res);
    });
}