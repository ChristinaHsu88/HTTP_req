function getAndPrintHTML() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    var chunk = '';
    var https = require('https');
    https.get(requestOptions, function(response) {
        response.setEncoding('utf-8');

        response.on('data', function(data){
            chunk += data + '\n';
            console.log(chunk);
        })

        response.on('end', function(){
            console.log('completed process.');
        })
        
    })
}

getAndPrintHTML();