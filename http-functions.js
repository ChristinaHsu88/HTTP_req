module.exports = function getHTML (options, callback) {
    var https = require('https');
    var chunks = '';
    https.get(options, function (data) {
        data.setEncoding('utf-8');
        data.on('data', function(data) {
            chunks += data + '\n';
            console.log(chunks);
        })



        data.on('end', function () {
            //console.log('completed process');
            callback(chunks);
        })
    })
}