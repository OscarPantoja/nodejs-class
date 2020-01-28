const fs = require('fs');


//writeFile recibe el nombre del archivo a crear y la ruta donde se va a crear, 
//el contenido del archivo y el callback para saber si hay un error

fs.writeFile('./prueba.txt', 'texto de prueba', function (err) {
    if (err) {
        console.log(err)
    }
    console.log('Archivo creado')
});