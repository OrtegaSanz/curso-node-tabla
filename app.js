const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar');
console.clear();




crearArchivo(argv.b, argv.l,argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));