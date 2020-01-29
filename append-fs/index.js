const fs = require('fs');

//como primer parametro la ruta del archivo que se va a copiar, como segundo el destino
// y por ultimo el callback

fs.appendFile('/home/oscarp/kodemia/nodejs/nodejs-class/write-fs/prueba2.txt', ', y No entiende!!', (err) => {
    if (err) throw err;
    console.log('Archivo actualizado');
});