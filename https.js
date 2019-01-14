function getAndPrintHTMLChunks(){

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    var https = require('https');
    https.get(requestOptions, function(response){
        response.setEncoding('utf-8');

        response.on('data', function(data) {
            console.log('Received. Length:', data.length);
        })

        response.on('end', function() {
            console.log('completed process.');
        })
    })
    
}

getAndPrintHTMLChunks();