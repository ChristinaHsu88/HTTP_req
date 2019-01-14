function getHTML (options, callback) {
    var https = require('https');
    var chunks = '';
    https.get(options, function (data) {
        data.setEncoding('utf-8');
        data.on('data', function(data) {
            chunks += data + '\n';
            console.log(chunks); 
        })

        callback(chunks);

        data.on('end', function () {
            console.log('completed process');
        })
    })
}

function printHTML (html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);