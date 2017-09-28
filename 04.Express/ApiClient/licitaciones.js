var request = require("request");
var getDatos = function name() {
    var options = {
        method: 'GET',
        url: 'http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json',
        qs: {
            fecha: '27092017',
            ticket: 'BFDF014A-8A7C-4191-A4DE-4C6FA9683992'
        },
        headers: { 'cache-control': 'no-cache' }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}

var getDatos2 = function() {
    request
        .get('http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?fecha=27092017&ticket=BFDF014A-8A7C-4191-A4DE-4C6FA9683992')
        .on('response', function(response) {
            //console.log(response.statusCode) // 200 
            //console.log(response.headers['content-type']) // 'image/png' 

            response.on('data', function(data) {
                // compressed data as it is received 
                //console.log(data)
            })

        }).on('error', function(err) {
            console.log(`Error: ${err.message}`)
        }).on('data', function(data) {
            console.log(data)
        })
}

getDatos2();