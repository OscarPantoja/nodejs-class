const fs = require('fs');

//recibe como primer argumento la ubicación del archivo y el callback

fs.unlink('/home/oscarp/kodemia/nodejs/nodejs-class/write-fs/prueba.txt', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido borrado');
});