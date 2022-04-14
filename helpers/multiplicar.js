const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base,listar,hasta) => {
    let salida = '';
    let consola = '';
    try {
        
        salida += '===============================\n';
        salida += `         Tabla del ${base}           \n`;
        salida += '===============================\n';
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar === true){
            consola += '===============================\n'.green;
            consola += `         Tabla del ${colors.blue(base)}           \n`;
            consola += '===============================\n'.green;
            for (let i = 0; i <= hasta; i++) {
                consola += `${colors.green(base)} x ${colors.green(i)} = ${colors.red(base * i)}\n`;
            }
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Archivo tabla-${base}.txt creado`;
    } catch (err) {
        throw err
    }
    
}


module.exports = {
    crearArchivo
};