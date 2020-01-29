const fs = require('fs');

//readFile es para leer el contenido de un archivo
//como primer argumento la ubicación del archivo, el formato de codificación
//y el callback

fs.readFile('/home/oscarp/kodemia/nodejs/nodejs-class/write-fs/prueba2.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});