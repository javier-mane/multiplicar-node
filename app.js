const  argv = require('./config/yargs').argv
const { creaArchivo, listarTabla } = require('./Utilerias/tablas'); 

// let argv2 = process.argv;

let comando = argv._[0];
console.log(comando);

switch(comando){
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case 'crear':
    creaArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch (err => console.log(err));
    break;

  default:
    console.log(argv);

}



