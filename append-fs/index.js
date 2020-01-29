const fs = require('fs');

fs.appendFile('/home/oscarp/kodemia/nodejs/nodejs-class/write-fs/prueba2.txt', ', y No entiende!!', (err) => {
    if (err) throw err;
    console.log('Archivo actualizado');
});