
const fs = require('fs');

function mkdir(path) {
    fs.mkdir(path, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log('carpeta creada')
    })
}
mkdir('./nuevaCarpeta')