/**
 * Created by Raghavender Mylagary on 11/14/2016.
 */
var http = require('http'),
    fs = require('fs');


fs.readFile('./blender.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});
