module.exports = function(app){
    app.get('/form', function(req, res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticia/salvar', function(req, res){
        var noticias = req.body;
        res.send(noticias);
    });
}