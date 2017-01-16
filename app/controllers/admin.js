module.exports.publication_add = function(app, req, res){
    res.render('admin/publication_add', {form_error: {}, publication: {}});
}

module.exports.publication_save = function(app, req, res){
    var publication = req.body;

    req.assert('title','Title is required').notEmpty();
    req.assert('abstract','Abstract is required').notEmpty();
    req.assert('abstract','Resume length must be between 10 and 100 characters').len(10, 100);
    req.assert('author','Author is required').notEmpty();
    req.assert('date','Date is required').notEmpty().isDate({'format': 'YYYY-MM-DD'});
    req.assert('content','Content is required').notEmpty();

    var form_error = req.validationErrors();
    if(form_error){
        console.log(form_error[0].msg);
        res.render('admin/publication_add', {form_error: form_error, publication: publication});
        return;
    }

    var connection = app.config.db();
    var newsModel = new app.app.models.news(connection);

    newsModel.savePublication(publication, function(error, result){
        res.redirect('/publications');
    });
}