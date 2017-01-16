function News(connection){
    this._connection = connection;
}

News.prototype.getPublications = function(callback){
    this._connection.query('select * from news order by date desc', callback);
};

News.prototype.getPublication = function(publication_args, callback){
    this._connection.query('select * from news where id = '+ publication_args.id, callback);
};

News.prototype.savePublication = function(publication, callback){
    this._connection.query('insert into news set ?', publication, callback);
};

News.prototype.last5Publications = function(callback){
    this._connection.query('select * from news order by date desc limit 5', callback);
};

module.exports = function(){
    return News;
}