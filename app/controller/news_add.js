module.exports = function(app){
	app.get('/admin/news-add', function(req, res){
		res.render('admin/news_add');
	});
}