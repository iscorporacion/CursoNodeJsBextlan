/*
-- ==============================================================================================
-- Author:	Simón Lebrun
-- Create date: 09/01/2017
-- Description:	Actualiza las existencias de las bodegas en Fracttal desde una vista de Flexline
-- ==============================================================================================
*/

var Request = require('request');
var sql = require('mssql');
var Progress = require('progress');
var fracttalItems = [],
    index = 0;
var sleep = require('system-sleep');

//var sleep = require('sleep');

var leerSql = function() {
    console.log('ingreso al leer')
    var dbConfig = {
        server: "EXODUS-PC\\SQL2008",
        database: "MvcDemo",
        user: "sa",
        password: "exodus" //,
            //port: 1433
    };

    sql.connect(dbConfig).then(function() {
        // Query 
        console.log("conectado");
        new sql.Request().query('Select * From Users').then(function(recordset) {
            console.log('select');
            var datos = recordset.recordset;
            console.log(datos.length);

            for (var idx = 0; idx < datos.length; idx++) {
                console.log(`Nombre: ${datos[idx].FirstName}`);

                // var item = {};
                // item.UserId = recordset[idx].UserId;
                // item.FirstName = recordset[idx].FirstName;
                // item.LastName = recordset[idx].LastName;
                // item.Username = recordset[idx].Username;

                // fracttalItems.push(item);
                //console.log(item);
            }

            bar = new Progress('Registrando los repuestos [:bar] :percent :etas', {
                complete: '=',
                incomplete: ' ',
                width: 50,
                total: fracttalItems.length
            });

            //enviarFracttal();
            getDatos();
        });
    }).catch(function(err) {
        console.log(err);
    });
    console.log('fin');

};

var getDatos = function name() {
    var options = {
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users',
        headers: { 'cache-control': 'no-cache' }
    };

    Request(options, function(error, response, body) {
            console.log(response.statusCode);
            console.log(response.statusMessage);


            let json = JSON.parse(body);
            console.log(json[0].name)
            console.log(json.length)

            for (var i in json) {
                console.log(json[i].email)
            }


            if (error) console.log('dddd');
            else {
                //console.log('the decoded data is: ' + body);

                // var text = '';
                // for (var key in body) {
                //     console.log('Index is: ' + key + '\nDescription is:  ' + body[key]);
                // }

            }
        }) //.on('data', function(data) {
        //     // decompressed data as it is received 
        //     console.log('decoded chunk: ' + data)
        // })
        // .on('response', function(response) {
        //     // unmodified http.IncomingMessage object 
        //     console.log('response');
        //     // response.on('data', function(data) {
        //     //     // compressed data as it is received 
        //     //     console.log('received ' + data.length + ' bytes of compressed data')
        //     // })
        // });

    // Request
    //     .get('http://googleiouiu.com/img.png')
    //     .on('response', function(response) {
    //         console.log(response.statusCode) // 200 
    //         console.log(response.headers['content-type']) // 'image/png' 
    //     }).on('error', function(err) {
    //         console.log(`Error: ${err.message}`)
    //     })
}

var enviarFracttal = function() {
    var item = fracttalItems[index];
    var res = encodeURI(item.code);
    var requestOptions = {
        uri: 'https://app.fracttal.com/api/inventories/' + res,
        method: 'PUT',
        headers: {},
        hawk: {
            credentials: {
                id: 'gVfUonojd9y9CzWCsaZe',
                key: 'T4vcddZDoKtVpa0fNpO1NBDNiQGJ0uo5rQjV0xJLrpBSqqqgGshd4v',
                algorithm: 'sha256'
            }
        },
        json: item
    };
    console.log("Enviando el item: ", item);
    Request(requestOptions, function(error, response, body) {
        sleep(180);
        if (response.statusCode == 404) {
            crearItem(item);
        } else {
            if (response.statusCode != 200) {
                console.log(body, error);
            }
        }
        //console.log(body,error);
        bar.tick();
        index++;
        if (index < fracttalItems.length)
            enviarFracttal();
    });
};

var crearItem = function(item) {

    var requestOptions = {
        uri: 'https://app.fracttal.com/api/inventories',
        method: 'POST',
        headers: {},
        hawk: {
            credentials: {
                id: 'gVfUonojd9y9CzWCsaZe',
                key: 'T4vcddZDoKtVpa0fNpO1NBDNiQGJ0uo5rQjV0xJLrpBSqqqgGshd4v',
                algorithm: 'sha256'
            }
        },
        json: item
    };

    Request(requestOptions, function(error, response, body) {
        if (response.statusCode != 200) {
            console.log(body, error);
        }
    });

};

leerSql();