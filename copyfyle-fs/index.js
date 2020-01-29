const fs = require('fs');

fs.copyFile('../write-fs/prueba2.txt', 'copia.txt', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido copiado');
});