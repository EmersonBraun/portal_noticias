var http = require('http');
var server = http.createServer(function(req, res){
    var categoria = req.url;
    res.end('Teste');
});
server.listen(3000);