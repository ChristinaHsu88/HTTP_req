function getAndPrintHTMLChunks(){

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    var chunk = [];
    var http = require('http');
    http.get(requestOptions, function(response){
        response.setEncoding('utf-8');

        response.on('data', function(data) {
            console.log('Received. Length:', data.length);
            chunk += data + '\n';
            console.log(chunk);
        })

        response.on('end', function() {
            console.log('completed process.');
        })
    })
    
}

getAndPrintHTMLChunks();