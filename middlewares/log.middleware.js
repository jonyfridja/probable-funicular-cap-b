module.exports = {
    logResponseBody(req, res, next) {
        var oldWrite = res.write,
            oldEnd = res.end;

        var chunks = [];

        res.write = function (chunk) {
            chunks.push(new Buffer(chunk));

            oldWrite.apply(res, arguments);
        };

        res.end = function (chunk) {
            if (chunk)
                chunks.push(new Buffer.from(chunk));

            var body = Buffer.concat(chunks).toString('utf8');
            console.log('response body:\n');
            console.log('req.path', req.path);
            console.log('body', body);
            console.log('\nresponse end');


            oldEnd.apply(res, arguments);
        };

        next();
    }
}